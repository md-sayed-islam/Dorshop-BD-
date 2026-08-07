const CACHE='dorshopbd-v7-FINAL-FIX';
self.addEventListener('install',e=>{
  self.skipWaiting();
  console.log('v7 install - deleting old cache');
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
  // Always fetch fresh, no cache
  e.respondWith(fetch(e.request, {cache: 'no-store'}).catch(()=>caches.match(e.request)));
});
