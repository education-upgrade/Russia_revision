/* service-worker.js
   Minimal PWA cache with explicit precache list.
   Notes:
   - Keep the install step resilient (cache each file independently).
   - Avoid very large/non-critical assets in precache.
*/
const CACHE_NAME = "eduupgrade-russia-v4";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest?v=3",
  "./manifest.webmanifest",
  "./apple-touch-icon.png?v=3",
  "./apple-touch-icon.png",
  "./icon-192.png?v=3",
  "./icon-192.png",
  "./icon-192-maskable.png?v=3",
  "./icon-192-maskable.png",
  "./icon-512.png?v=3",
  "./icon-512.png",
  "./icon-512-maskable.png?v=3",
  "./icon-512-maskable.png",
  "./header-bg.jpg",
  "./section-bg.jpg",
  "./topic1.png",
  "./topic2.png",
  "./topic3.png",
  "./topic4.png",
  "./1.png",
  "./Lesson Timelines/Topic_1.png",
  "./Lesson Timelines/topic_2.png",
  "./Lesson Timelines/topic_3.png",
  "./Lesson Timelines/topic_4.png",
  "./Lesson infographics/Alexander-II-Reforms-1.png"
];

// Install: pre-cache core assets
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)));
    })()
  );
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))));
      await self.clients.claim();
    })()
  );
});

// Allow page to trigger immediate activation
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

// Fetch: stale-while-revalidate for same-origin GET
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Only handle same-origin requests (your own files)
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req)
        .then((res) => {
          // Cache successful basic responses
          if (res && res.status === 200 && res.type === "basic") {
            cache.put(req, res.clone());
          }
          return res;
        })
        .catch(() => null);

      // Serve cached immediately; update in background
      if (cached) {
        fetchPromise; // intentionally not awaited
        return cached;
      }
      const net = await fetchPromise;
      // If offline and no cache, just fail
      return net || Response.error();
    })()
  );
});
