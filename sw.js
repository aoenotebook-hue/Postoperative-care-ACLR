// Lets the app open with no signal (hospital basements, rural areas) and
// makes it reliably installable on Android.
//
// Network-first: when online, patients always get the latest deployment —
// the cache is only ever a fallback, so an update can never be stuck behind
// a stale copy. Bump CACHE only if the caching logic itself changes.
const CACHE = 'aclr-v1';
const CORE = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './images/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // IKDC uploads/status checks go to Apps Script — never cache or intercept.
  if (url.origin !== self.location.origin) return;
  // Exercise videos are large and fetched with Range requests; leave them to the network.
  if (req.headers.has('range') || url.pathname.includes('/videos/')) return;

  event.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit =>
          hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});
