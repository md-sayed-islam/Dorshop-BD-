// Dorshop BD v11 FINAL - NO CACHE - Forces fresh update - 2026
const CACHE_NAME = 'dorshopbd-v11-NO-CACHE-FINAL';
self.addEventListener('install', e => {
  self.skipWaiting();
  console.log('v11 install - clearing all old caches');
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(k => {
        console.log('Deleting old cache:', k);
        return caches.delete(k);
      }));
    }).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  // Always fetch fresh from network, no cache
  e.respondWith(
    fetch(e.request, {cache: 'no-store'})
      .then(response => response)
      .catch(() => caches.match(e.request))
  );
});

