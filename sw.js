const CACHE='dorshopbd-v6-SECRET-FINAL-2026';
self.addEventListener('install',e=>{
  self.skipWaiting();
  console.log('SW v6 install - clear old');
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>{
      console.log('Deleting old cache:',k);
      return caches.delete(k);
    })))
  );
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    fetch(e.request, {cache: 'no-store'})
      .then(r=>r)
      .catch(()=>caches.match(e.request))
  );
});
