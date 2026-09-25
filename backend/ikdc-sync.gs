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
 * To deploy (test on a COPY of your sheet first):
 *  1. From the Google Sheet the webhook writes to: Extensions > Apps Script.
 *  2. Replace the whole existing script with this file and save. The
 *     project must use the V8 runtime (Project Settings > "Enable Chrome V8
 *     runtime") — otherwise saving fails with a syntax error.
 *  3. Optional: run setupSheetHeaders() once (function dropdown > Run) to
 *     create or tidy the SHEET_NAME tab and grant permissions. A tab written
 *     by the previous version of this script (one "AnswersJson" column) is
 *     converted to the readable layout — one column per IKDC question —
 *     keeping every row. A tab holding anything else is never touched: it
 *     stops with an error instead — set SHEET_NAME to a new name such as
 *     "IKDC_v2" and run it again. Don't edit COLUMNS or QUESTIONS.
 *  4. Deploy > Manage deployments > pencil on the EXISTING deployment >
 *     Version: New version > Deploy (Execute as: Me, Who has access:
 *     Anyone). Never "New deployment": that creates a different /exec URL
 *     and the app would keep sending to the old one.
 *  5. Open <your /exec URL>?action=status&key=00000000-0000-4000-8000-000000000000
 *     in a browser: {"ok":true,"found":false} means the new script is live.
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

// Time zone for the "Received" column.
const TIME_ZONE = 'Asia/Bangkok';

// One readable row per survey, one column per IKDC question. Column headings
// double as the lookup keys, so don't rename them. If you add your own
// formula/computed columns, put them AFTER the last one — this script never
// writes there.
//
// 0-10 questions are stored the way the app scores them: 10 is always the
// BEST end (e.g. pain frequency 10 = never). That is the reverse of the paper
// IKDC form's pain scales, so each heading spells out the direction.
const QUESTIONS = [
  { id: 'q1',   header: 'Q1 Highest activity without significant pain', kind: 'activity' },
  { id: 'q2',   header: 'Q2 Pain frequency (0 = constant, 10 = never)', kind: 'scale' },
  { id: 'q3',   header: 'Q3 Pain severity (0 = worst imaginable, 10 = no pain)', kind: 'scale' },
  { id: 'q4',   header: 'Q4 Stiffness / swelling', kind: 'stiff' },
  { id: 'q5',   header: 'Q5 Highest activity without significant swelling', kind: 'activity' },
  { id: 'q6',   header: 'Q6 Locking or catching', kind: 'lock' },
  { id: 'q7',   header: 'Q7 Highest activity without giving way', kind: 'activity' },
  { id: 'q8',   header: 'Q8 Highest regular activity level', kind: 'activity' },
  { id: 'q9a',  header: 'Q9a Going up stairs', kind: 'diff' },
  { id: 'q9b',  header: 'Q9b Going down stairs', kind: 'diff' },
  { id: 'q9c',  header: 'Q9c Kneeling on front of knee', kind: 'diff' },
  { id: 'q9d',  header: 'Q9d Squatting', kind: 'diff' },
  { id: 'q9e',  header: 'Q9e Sitting with knee bent', kind: 'diff' },
  { id: 'q9f',  header: 'Q9f Rising from a chair', kind: 'diff' },
  { id: 'q9g',  header: 'Q9g Running straight ahead', kind: 'diff' },
  { id: 'q9h',  header: 'Q9h Jumping and landing on injured leg', kind: 'diff' },
  { id: 'q9i',  header: 'Q9i Stopping and starting quickly', kind: 'diff' },
  { id: 'q10a', header: 'Q10a Current knee function (0 = unable to do daily activities, 10 = normal)', kind: 'scale' },
  { id: 'q10b', header: 'Q10b Knee function before injury (0-10, not scored)', kind: 'scale' }
];
// Answer wording for each points value. Mirrors the app's IKDC options.
const ANSWER_TEXT = {
  activity: { 4: 'Very strenuous (jumping, pivoting)', 3: 'Strenuous (heavy work, skiing, tennis)', 2: 'Moderate (running, jogging)', 1: 'Light (walking, housework)', 0: 'Unable to do any of these' },
  stiff:    { 4: 'Not at all', 3: 'Mildly', 2: 'Moderately', 1: 'Very', 0: 'Extremely' },
  diff:     { 4: 'No difficulty', 3: 'Minimal difficulty', 2: 'Moderate difficulty', 1: 'Extreme difficulty', 0: 'Unable to do' },
  lock:     { 1: 'No', 0: 'Yes' }
};
const TIMEPOINT_TEXT = { w2: '2 weeks', w6: '6 weeks', w12: '12 weeks', w25: '25 weeks (6 months)', w52: '52 weeks (1 year)' };
const GRAFT_TEXT = { unsure: 'Not sure', hamstring: 'Hamstring tendon', bpb: 'Patellar tendon (BTB)', quad: 'Quadriceps tendon', allograft: 'Donor graft (allograft)' };

const COL_SCORE = 'IKDC score (0-100)';
const COL_POSTOP_DAY = 'Post-op day';
const COL_KEY = 'Submission ID';
const COLUMNS = [
  'Received (Thai time)',
  'HN',
  'Timepoint',
  'Assessment date',
  'Surgery date',
  COL_POSTOP_DAY,
  'Graft',
  'Meniscus repair',
  COL_SCORE,              // SERVER-COMPUTED, never trusts the client-sent score
  ...QUESTIONS.map(q => q.header),
  'Answers (raw points)', // for audit / re-scoring
  COL_KEY                 // client-generated UUID, used to drop duplicate submissions
];
// Everything except the two numeric columns is stored as plain text — see writeRow_().
const TEXT_COLUMNS = COLUMNS.filter(name => name !== COL_POSTOP_DAY && name !== COL_SCORE);

// The earlier, machine-style layout. A tab in exactly this layout is
// converted to the readable one automatically on the next submission.
const V1_COLUMNS = ['ReceivedAt', 'IdempotencyKey', 'HN', 'Timepoint', 'AssessmentDate', 'SurgeryDate',
  'PostopDay', 'Graft', 'MeniscusRepair', 'Score', 'AnswersJson'];

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
// Must start with a letter/digit: a leading "-" would let Sheets read the
// cell as a number or formula. Mirrors HN_PATTERN in app.js — keep in sync.
// Case-insensitive here (stored uppercase) so older app builds that didn't
// uppercase the HN aren't rejected.
const HN_RE = /^[A-Za-z0-9][A-Za-z0-9./-]{0,19}$/;

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

    if (typeof body.hn === 'string') body.hn = body.hn.toUpperCase();
    const errors = validatePayload(body);
    if (errors.length) {
      return jsonOut_({ ok: false, error: 'invalid_payload', detail: errors });
    }

    const cache = CacheService.getScriptCache();
    if (!checkAndBumpRateLimit_(cache, 'rl_global', RATE_LIMIT_GLOBAL_WINDOW_SEC, RATE_LIMIT_GLOBAL_MAX)) {
      return jsonOut_({ ok: false, error: 'rate_limited_global' });
    }
    // Dedup before the per-HN limit: a retry of something already stored is
    // harmless and shouldn't eat into that patient's allowance.
    const sheet = getSheet_();
    const existingRow = findRowByKey_(sheet, body.idempotencyKey);
    if (existingRow) {
      return jsonOut_({ ok: true, alreadyRecorded: true });
    }

    if (!checkAndBumpRateLimit_(cache, 'rl_hn_' + body.hn, RATE_LIMIT_PER_HN_WINDOW_SEC, RATE_LIMIT_PER_HN_MAX)) {
      return jsonOut_({ ok: false, error: 'rate_limited_hn' });
    }

    const score = computeIkdcScoreServerSide(body.answers);
    writeRows_(sheet, sheet.getLastRow() + 1, [buildRow_(body, score, new Date())]);

    return jsonOut_({ ok: true, alreadyRecorded: false, score: score });
  } catch (err) {
    // Shows up under Executions in the Apps Script editor.
    console.error('doPost failed: ' + (err && err.stack || err));
    return jsonOut_({ ok: false, error: 'server_error' });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    return handleGet_(e);
  } catch (err) {
    console.error('doGet failed: ' + (err && err.stack || err));
    return jsonOut_({ ok: false, error: 'server_error' });
  }
}

function handleGet_(e) {
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
    // Read-only: never creates/converts the tab here (doGet doesn't hold the lock).
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const found = !!(sheet && findRowByKey_(sheet, key));
    return jsonOut_({ ok: true, found: found });
  }

  return jsonOut_({ ok: false, error: 'unknown_action' });
}

/* ============================= SHEET HELPERS ============================= */

// Returns the results tab, ready to write to:
//  - missing or empty  -> created with the readable headings;
//  - old machine-style layout written by the previous version of this
//    script -> converted in place to the readable layout (rows kept);
//  - anything else -> left untouched, with an error explaining what to change.
// Only called from doPost/setup, which hold the script lock.
function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    writeHeader_(sheet);
    return sheet;
  }
  if (sheet.getLastRow() === 0) {
    writeHeader_(sheet);
    return sheet;
  }
  const header = readHeader_(sheet);
  if (startsWith_(header, COLUMNS)) return sheet;
  const extraColumnsUsed = header.slice(V1_COLUMNS.length).some(v => v !== '' && v !== null);
  if (startsWith_(header, V1_COLUMNS) && !extraColumnsUsed) {
    convertV1Rows_(sheet);
    return sheet;
  }
  throw new Error('Tab "' + SHEET_NAME + '" already exists with a different layout (row 1: ' +
    JSON.stringify(header.slice(0, 12)) + '). Not writing into it. Change SHEET_NAME at the top of this ' +
    'script to a new tab name (e.g. "IKDC_v2"), save, and redeploy.');
}

function readHeader_(sheet) {
  const n = sheet.getLastColumn();
  return n ? sheet.getRange(1, 1, 1, n).getValues()[0] : [];
}
function startsWith_(header, cols) {
  return cols.every((name, i) => header[i] === name);
}
function ensureColumns_(sheet, n) {
  const max = sheet.getMaxColumns();
  if (max < n) sheet.insertColumnsAfter(max, n - max);
}
function writeHeader_(sheet) {
  ensureColumns_(sheet, COLUMNS.length);
  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]);
  formatSheet_(sheet);
}
function formatSheet_(sheet) {
  sheet.getRange(1, 1, 1, COLUMNS.length)
    .setFontWeight('bold').setWrap(true).setVerticalAlignment('top').setBackground('#EEF2F8');
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(2);                               // date + HN stay visible while scrolling
  sheet.setColumnWidths(1, 9, 120);
  sheet.setColumnWidths(10, QUESTIONS.length, 170);
}

function answerText_(q, v) {
  if (typeof v !== 'number') return '';
  if (q.kind === 'scale') return v + ' / 10';
  const text = ANSWER_TEXT[q.kind][v];
  if (text === undefined) return String(v);
  return q.kind === 'lock' ? text : text + ' (' + v + ')'; // points in brackets
}

// One readable row, in COLUMNS order. `received` is a Date, or the original
// text when converting an old row whose timestamp can't be parsed.
function buildRow_(sub, score, received) {
  const answers = sub.answers || {};
  return [
    received instanceof Date ? Utilities.formatDate(received, TIME_ZONE, 'yyyy-MM-dd HH:mm') : String(received || ''),
    String(sub.hn || ''),
    TIMEPOINT_TEXT[sub.timepoint] || String(sub.timepoint || ''),
    String(sub.date || ''),
    String(sub.surgeryDate || ''),
    typeof sub.postopDay === 'number' && isFinite(sub.postopDay) ? sub.postopDay : '',
    GRAFT_TEXT[sub.graft] || String(sub.graft || ''),
    sub.meniscusRepair === 'protected' ? 'Yes' : sub.meniscusRepair === 'none' ? 'No' : String(sub.meniscusRepair || ''),
    typeof score === 'number' ? score : '',
    ...QUESTIONS.map(q => answerText_(q, answers[q.id])),
    JSON.stringify(answers),
    String(sub.idempotencyKey || '')
  ];
}

// Plain-text format on every string column BEFORE writing: otherwise Sheets
// auto-converts values (an HN like "000123" becomes the number 123 and loses
// its leading zeros; dates become date serials) and would interpret any
// string starting with "=" as a formula. Only post-op day and score stay numeric.
function writeRows_(sheet, startRow, rows) {
  if (!rows.length) return;
  ensureColumns_(sheet, COLUMNS.length);
  const range = sheet.getRange(startRow, 1, rows.length, COLUMNS.length);
  const formats = COLUMNS.map(name => TEXT_COLUMNS.indexOf(name) !== -1 ? '@' : '0');
  range.setNumberFormats(rows.map(() => formats));
  range.setValues(rows);
}

// Rewrites rows stored by the previous version of this script (one JSON blob
// of answers) into the readable layout. Every row is kept; the score is
// recomputed from its answers.
function convertV1Rows_(sheet) {
  const last = sheet.getLastRow();
  const old = last >= 2 ? sheet.getRange(2, 1, last - 1, V1_COLUMNS.length).getValues() : [];
  const rows = old.map(r => {
    let answers = null;
    try { answers = JSON.parse(r[10]); } catch (e) { /* keep the raw text below */ }
    const received = new Date(r[0]);
    const sub = {
      idempotencyKey: r[1], hn: r[2], timepoint: r[3], date: r[4], surgeryDate: r[5],
      postopDay: r[6] === '' ? '' : Number(r[6]), graft: r[7], meniscusRepair: r[8], answers: answers || {}
    };
    const row = buildRow_(sub, answers ? computeIkdcScoreServerSide(answers) : r[9], isNaN(received.getTime()) ? r[0] : received);
    if (!answers) row[COLUMNS.indexOf('Answers (raw points)')] = String(r[10] || '');
    return row;
  });
  sheet.getRange(1, 1, last, V1_COLUMNS.length).clearContent();
  writeHeader_(sheet);
  writeRows_(sheet, 2, rows);
  console.log('Converted ' + rows.length + ' existing row(s) in "' + SHEET_NAME + '" to the readable layout.');
}

// Finds a submission by its ID in either layout (read-only, safe without the
// lock). Linear scan is fine at this scale (50-100 patients x 5 timepoints).
function findRowByKey_(sheet, key) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  const header = readHeader_(sheet);
  let col = header.indexOf(COL_KEY);
  if (col === -1) col = header.indexOf('IdempotencyKey'); // old layout, not converted yet
  // A tab this script doesn't manage: "not found" would wrongly tell the app
  // it's safe to re-send, so report an error instead.
  if (col === -1) throw new Error('Tab "' + SHEET_NAME + '" has no submission ID column — not a tab this script manages.');
  const values = sheet.getRange(2, col + 1, lastRow - 1, 1).getValues();
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
 * Optional: run this ONCE from the Apps Script editor (select it in the
 * function dropdown, click Run) to create the results tab and grant the
 * script permission up front. The first submission would create the tab
 * anyway. It never overwrites a tab that already holds different data —
 * it stops with an error explaining what to change instead.
 */
function setupSheetHeaders() {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let sheet;
  try { sheet = getSheet_(); formatSheet_(sheet); } finally { lock.releaseLock(); }
  Logger.log('Ready: tab "' + sheet.getName() + '" in "' + SpreadsheetApp.getActiveSpreadsheet().getName() + '".');
}

/**
 * How to verify the GET-readability assumption described at the top of
 * this file, against YOUR real deployment, before trusting it (after
 * redeploying as in step 4 at the top — same deployment, new version):
 *
 * 1. Open the app (https://postoperative-care-aclr.vercel.app) in a
 *    desktop browser, open devtools > Console, and run:
 *
 *      fetch(SHEET_WEBHOOK_URL + "?action=status&key=00000000-0000-4000-8000-000000000000")
 *        .then(r => r.json()).then(console.log).catch(console.error)
 *
 * 2. If you see {ok:true, found:false}, the GET is readable cross-origin
 *    and the app's confirmation flow works as designed. If you see a
 *    network/CORS error instead, the app fails safe — it never marks a
 *    survey confirmed without a readable ack, and never re-sends to a
 *    backend that hasn't proven it dedupes — but surveys will stay
 *    "not yet confirmed" until that's fixed (e.g. with a small Vercel
 *    function proxying to this script with explicit CORS headers).
 */
