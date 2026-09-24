/**
 * ACL app — IKDC sync backend (Google Apps Script Web App)
 * =========================================================
 *
 * THIS FILE IS NOT DEPLOYED. It was written by Claude Code, reviewing this
 * repo, as a replacement design for the existing production Apps Script
 * behind SHEET_WEBHOOK_URL in index.html. Claude has no Google account
 * access, no Apps Script Editor access, and did not (and cannot) deploy,
 * run, or test this against the real backend or the real patient sheet.
 *
 * To use it: open your existing Apps Script project (Extensions > Apps
 * Script from the Google Sheet SHEET_WEBHOOK_URL points at), replace the
 * current doPost/doGet with the contents of this file, adjust SHEET_NAME
 * and COLUMNS below to match your actual sheet, run setupSheetHeaders()
 * once from the Apps Script editor, then re-deploy ("Manage deployments" >
 * edit > New version) so the /exec URL picks up the change. Test against a
 * COPY of your sheet first, not the production one.
 *
 * What changed vs. the likely current behavior, and why:
 *
 * 1. Strict payload validation. Every field is checked for exact shape,
 *    type and range before anything is written — malformed, truncated or
 *    fuzzed submissions are rejected outright rather than silently stored.
 *    IKDC answer ranges and the score are re-derived server-side from the
 *    same scoring rule the app uses (see computeIkdcScoreServerSide below)
 *    — the client-sent score is never trusted or stored as-is.
 *
 * 2. Idempotency. Every submission carries a client-generated UUID
 *    (idempotencyKey). Resubmitting the same key (e.g. a retried request
 *    after a flaky connection) never creates a duplicate row — it's
 *    detected and treated as a no-op success.
 *
 * 3. Formula-safe writes. Data is written with setValues() into a FIXED
 *    column range (A .. the last entry in COLUMNS below) computed once at
 *    the top of this file. Nothing in this script ever writes past that
 *    range, so if you keep any computed/formula columns further to the
 *    right on the same sheet, this script can't touch them no matter what
 *    a caller sends.
 *
 * 4. A readable status check (doGet). Apps Script Web Apps have a known,
 *    long-standing limitation: a cross-origin POST's response body is not
 *    reliably readable by the calling page (this is exactly why the
 *    current client code uses `mode:'no-cors'` and just assumes success).
 *    Cross-origin GET requests to a Web App's /exec URL are, in real-world
 *    practice, more reliably readable — so writes still go through POST
 *    (fire-and-forget, as before), but the client now follows up with a
 *    GET to ?action=status&key=<idempotencyKey> and only marks a record as
 *    confirmed once it gets back a real, readable {found:true}.
 *    IMPORTANT — verify this yourself: Apps Script's cross-origin behavior
 *    has changed over time and depends on your deployment settings. Test
 *    it directly (see "How to verify" at the bottom of this file) before
 *    trusting it in production. The client code (index.html) fails safe if
 *    the GET is not readable: it just keeps retrying and never marks a
 *    record confirmed on a guess.
 *
 * 5. No per-patient identity check. This was a deliberate choice, made
 *    with the app owner: there's no SMS/email channel to distribute a
 *    per-patient secret, and the concrete threat this backend defends
 *    against is generic strangers/bots hitting a public URL, not one
 *    patient's data landing under another patient's HN. HN is treated as
 *    an identifier, not a credential — this script cannot and does not
 *    verify that the HN in a submission actually belongs to the person
 *    submitting it. If that threat model changes, the right fix is a
 *    per-patient credential (e.g. a PIN issued alongside existing
 *    paperwork) checked here — do not "fix" this by adding one shared
 *    secret for everyone; that provides no real per-patient protection.
 *
 * 6. Rate limiting. Apps Script's doPost(e)/doGet(e) do not expose the
 *    caller's IP address (a real platform limitation, not an oversight
 *    here), so per-IP throttling isn't possible. This script instead caps
 *    (a) requests per HN in a rolling window — generous, so legitimate
 *    offline-retry behavior never gets blocked — and (b) a global
 *    requests-per-minute ceiling across all callers, to blunt a scripted
 *    flood. Neither is a substitute for real authentication; both just
 *    raise the cost of casual abuse.
 */

/* ============================= CONFIG — EDIT THESE ============================= */

// Name of the sheet/tab this script writes IKDC submissions to.
const SHEET_NAME = 'IKDC';

// Fixed column order this script writes to, left to right starting at column A.
// If you add your own formula/computed columns, put them AFTER this list
// (i.e. starting at column COLUMNS.length + 1) — this script never writes there.
const COLUMNS = [
  'ReceivedAt',       // server timestamp, ISO string — set by this script, not the client
  'IdempotencyKey',   // client-generated UUID — used for dedup, see findExistingRow()
  'HN',
  'Timepoint',        // w2 | w6 | w12 | w25 | w52
  'AssessmentDate',   // date the patient filled out the form (client-supplied, validated)
  'SurgeryDate',
  'PostopDay',
  'Graft',
  'MeniscusRepair',   // protected | none
  'Score',            // SERVER-COMPUTED, never trusts the client-sent score
  'AnswersJson'       // raw answers object, JSON-stringified, for audit/re-scoring later
];

// Per-HN and global rate limits. Tune to your real patient volume (50-100
// patients, a handful of timepoints each) — these are deliberately generous
// so retry-after-offline behavior is never mistaken for abuse.
const RATE_LIMIT_PER_HN_WINDOW_SEC = 600;   // 10 minutes
const RATE_LIMIT_PER_HN_MAX        = 20;    // generous — legitimate use is ~1 submit/timepoint
const RATE_LIMIT_GLOBAL_WINDOW_SEC = 60;    // 1 minute
const RATE_LIMIT_GLOBAL_MAX        = 60;    // blunt flood protection, not per-caller precision

/* ============================= SCHEMA — mirrors index.html, do not let it drift ============================= */

const VALID_TIMEPOINTS = ['w2', 'w6', 'w12', 'w25', 'w52'];
const VALID_GRAFTS = ['unsure', 'hamstring', 'bpb', 'quad', 'allograft'];
const VALID_MENISCUS = ['protected', 'none'];

// id -> valid answer range [min, max]. Mirrors the IKDC_ITEMS/scale comment
// in index.html: activity5/stiff5/diff5 = 0..4, lock = 0..1, vas10/func10 = 0..10.
const ANSWER_RANGES = {
  q1: [0, 4], q2: [0, 10], q3: [0, 10], q4: [0, 4], q5: [0, 4], q6: [0, 1],
  q7: [0, 4], q8: [0, 4],
  q9a: [0, 4], q9b: [0, 4], q9c: [0, 4], q9d: [0, 4], q9e: [0, 4],
  q9f: [0, 4], q9g: [0, 4], q9h: [0, 4], q9i: [0, 4],
  q10a: [0, 10], q10b: [0, 10]
};
// Items counted toward the score — mirrors IKDC_SCORED_ITEMS (everything
// except q10b, which is collected but excluded from scoring).
const SCORED_IDS = Object.keys(ANSWER_RANGES).filter(id => id !== 'q10b');
const IKDC_RAW_MAX = 87;

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const HN_RE = /^[A-Za-z0-9/-]{1,20}$/;

/* ============================= VALIDATION ============================= */

function validatePayload(body) {
  const errors = [];
  const isStr = v => typeof v === 'string';
  const isNum = v => typeof v === 'number' && isFinite(v);

  if (body.type !== 'ikdc') errors.push('type must be "ikdc"');
  if (!isStr(body.idempotencyKey) || !UUID_RE.test(body.idempotencyKey)) errors.push('idempotencyKey missing/invalid');
  if (!isStr(body.timepoint) || VALID_TIMEPOINTS.indexOf(body.timepoint) === -1) errors.push('timepoint invalid');
  if (!isStr(body.hn) || !HN_RE.test(body.hn)) errors.push('hn missing/invalid');
  if (!isStr(body.date) || !DATE_RE.test(body.date) || !isPlausibleDate_(body.date)) errors.push('date invalid');
  if (!isStr(body.surgeryDate) || !DATE_RE.test(body.surgeryDate) || !isPlausibleDate_(body.surgeryDate)) errors.push('surgeryDate invalid');
  if (!isNum(body.postopDay) || body.postopDay < -3650 || body.postopDay > 3650 || Math.round(body.postopDay) !== body.postopDay) errors.push('postopDay invalid');
  if (!isStr(body.graft) || VALID_GRAFTS.indexOf(body.graft) === -1) errors.push('graft invalid');
  if (!isStr(body.meniscusRepair) || VALID_MENISCUS.indexOf(body.meniscusRepair) === -1) errors.push('meniscusRepair invalid');

  if (typeof body.answers !== 'object' || body.answers === null) {
    errors.push('answers missing');
  } else {
    const ids = Object.keys(ANSWER_RANGES);
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const v = body.answers[id];
      const range = ANSWER_RANGES[id];
      if (!isNum(v) || v < range[0] || v > range[1] || Math.round(v) !== v) {
        errors.push('answers.' + id + ' invalid');
      }
    }
    // reject unexpected extra keys — an oversized/fuzzed answers object is itself a signal
    const extra = Object.keys(body.answers).filter(k => ANSWER_RANGES[k] === undefined);
    if (extra.length) errors.push('answers has unexpected keys: ' + extra.join(','));
  }

  return errors;
}

function isPlausibleDate_(isoStr) {
  const d = new Date(isoStr + 'T00:00:00Z');
  if (isNaN(d.getTime())) return false;
  const now = new Date();
  const oneDayMs = 24 * 60 * 60 * 1000;
  if (d.getTime() > now.getTime() + oneDayMs) return false;       // not in the future
  if (d.getTime() < new Date('2015-01-01').getTime()) return false; // sanity floor
  return true;
}

// Re-derive the score server-side — never trust body.score.
// Mirrors computeIkdcScore() in index.html exactly.
function computeIkdcScoreServerSide(answers) {
  let sum = 0, count = 0;
  SCORED_IDS.forEach(id => {
    const v = answers[id];
    if (typeof v === 'number') { sum += v; count++; }
  });
  if (count === 0) return null;
  const prorated = (sum / count) * SCORED_IDS.length;
  return Math.round(Math.max(0, Math.min(100, (prorated / IKDC_RAW_MAX) * 100)));
}

/* ============================= RATE LIMITING ============================= */
// CacheService counters aren't atomic on their own, so the increment is
// wrapped in a short LockService hold — see doPost().

function checkAndBumpRateLimit_(cache, key, windowSec, max) {
  const raw = cache.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= max) return false;
  cache.put(key, String(count + 1), windowSec);
  return true;
}

/* ============================= HTTP HANDLERS ============================= */

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (err) {
    return jsonOut_({ ok: false, error: 'server_busy' });
  }
  try {
    let body;
    try {
      body = JSON.parse(e.postData.contents);
    } catch (err) {
      return jsonOut_({ ok: false, error: 'invalid_json' });
    }

    if (body.type !== 'ikdc') {
      return jsonOut_({ ok: false, error: 'unsupported_type' });
    }

    const errors = validatePayload(body);
    if (errors.length) {
      return jsonOut_({ ok: false, error: 'invalid_payload', detail: errors });
    }

    const cache = CacheService.getScriptCache();
    if (!checkAndBumpRateLimit_(cache, 'rl_global', RATE_LIMIT_GLOBAL_WINDOW_SEC, RATE_LIMIT_GLOBAL_MAX)) {
      return jsonOut_({ ok: false, error: 'rate_limited_global' });
    }
    if (!checkAndBumpRateLimit_(cache, 'rl_hn_' + body.hn, RATE_LIMIT_PER_HN_WINDOW_SEC, RATE_LIMIT_PER_HN_MAX)) {
      return jsonOut_({ ok: false, error: 'rate_limited_hn' });
    }

    const sheet = getSheet_();
    const existingRow = findRowByKey_(sheet, body.idempotencyKey);
    if (existingRow) {
      return jsonOut_({ ok: true, alreadyRecorded: true });
    }

    const score = computeIkdcScoreServerSide(body.answers);
    const row = [
      new Date().toISOString(),
      body.idempotencyKey,
      body.hn,
      body.timepoint,
      body.date,
      body.surgeryDate,
      body.postopDay,
      body.graft,
      body.meniscusRepair,
      score,
      JSON.stringify(body.answers)
    ];
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, COLUMNS.length).setValues([row]);

    return jsonOut_({ ok: true, alreadyRecorded: false, score: score });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const action = e.parameter.action;

  if (!action) {
    return jsonOut_({ ok: true, service: 'ikdc-sync' }); // harmless health check
  }

  if (action === 'status') {
    const key = e.parameter.key;
    if (!key || !UUID_RE.test(key)) {
      return jsonOut_({ ok: false, error: 'invalid_key' });
    }
    const cache = CacheService.getScriptCache();
    // status checks are cheap reads; still capped, just more generously
    if (!checkAndBumpRateLimit_(cache, 'rl_status_global', 60, 300)) {
      return jsonOut_({ ok: false, error: 'rate_limited_global' });
    }
    const sheet = getSheet_();
    const found = !!findRowByKey_(sheet, key);
    return jsonOut_({ ok: true, found: found });
  }

  return jsonOut_({ ok: false, error: 'unknown_action' });
}

/* ============================= SHEET HELPERS ============================= */

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" not found — run setupSheetHeaders() first.');
  return sheet;
}

// Linear scan is fine at this scale (50-100 patients x 5 timepoints = a few
// hundred rows, at most). Re-check this if patient volume grows an order of
// magnitude — at that point, keep a separate small "seen keys" sheet/cache
// instead of scanning the whole data sheet on every write.
function findRowByKey_(sheet, key) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  const keyCol = COLUMNS.indexOf('IdempotencyKey') + 1;
  const values = sheet.getRange(2, keyCol, lastRow - 1, 1).getValues();
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === key) return i + 2;
  }
  return null;
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this ONCE from the Apps Script editor (select it from the function
 * dropdown, click Run) to create/reset the header row on a fresh sheet.
 * Does nothing destructive to existing data rows below the header.
 */
function setupSheetHeaders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]);
}

/**
 * How to verify the GET-readability assumption described at the top of
 * this file, against YOUR real deployment, before trusting it:
 *
 * 1. Deploy this script as a Web App (Deploy > New deployment > Web app,
 *    Execute as: Me, Who has access: Anyone).
 * 2. From a browser on a DIFFERENT origin than script.google.com (e.g.
 *    open your hosted index.html, or just any other https:// page), open
 *    devtools console and run:
 *
 *      fetch("<your /exec URL>?action=status&key=00000000-0000-4000-8000-000000000000")
 *        .then(r => r.json()).then(console.log).catch(console.error)
 *
 * 3. If you see a logged object like {ok:true, found:false} — the GET is
 *    readable cross-origin and the client's status-check flow will work
 *    as designed. If you see a network/CORS error instead, the client
 *    will simply keep retrying (it fails safe — never marks a record
 *    confirmed without a readable ack) but you should look into an
 *    alternative (e.g. a small Cloudflare Worker / Vercel serverless
 *    function proxying to this script with explicit CORS headers) rather
 *    than relying on Apps Script's native behavior.
 */
