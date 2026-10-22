const CACHE_NAME = 'ifar-digital-v1';

const urlsToCache = [
  '/cartao.html',
  '/IFAR_Digital.vcf',
  '/logo-192.png',
  '/logo-512.png'
];

self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => response || fetch(event.request))

  );

});
