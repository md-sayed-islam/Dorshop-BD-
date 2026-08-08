// Dorshop BD v16 Firebase REAL LIVE - NO CACHE - Project dorshop-bd-5f7ff
self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('Dorshop BD v16 REAL LIVE - deleting old v3 cache');
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, {cache: 'no-store'}));
});

