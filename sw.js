const CACHE='dorshopbd-v7-FINAL-SECRET';
self.addEventListener('install',e=>{
  self.skipWaiting();
  console.log('SW v7 install - clearing all');
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>{
      console.log('Deleting cache:',k);
      return caches.delete(k);
    }))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    fetch(e.request, {cache: 'no-store', headers: {'Cache-Control': 'no-cache'}})
      .then(r=>r)
      .catch(()=>caches.match(e.request))
  );
});
