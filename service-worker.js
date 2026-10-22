const CACHE_NAME = "ifar-v1";

const FILES = [
  "/",
  "/cartao.html",
  "/manifest.json",
  "/logo-192.png",
  "/logo-512.png",
  "/IFAR_Digital.vcf"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))

  );

  self.skipWaiting();

});

self.addEventListener("activate", event => {

  event.waitUntil(
    self.clients.claim()
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request);

      })

  );

});
