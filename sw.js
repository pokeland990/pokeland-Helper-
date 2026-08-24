const CACHE_NAME = "pokeland-helper-v1";

const FILES = [
  "/pokeland-Helper-/",
  "/pokeland-Helper-/index.html",
  "/pokeland-Helper-/manifest.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
