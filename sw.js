const CACHE='dorshopbd-v6-SECRET-FINAL';
self.addEventListener('install',e=>{ self.skipWaiting(); console.log('SW v6 install'); });
self.addEventListener('activate',e=>{ 
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>{
      console.log('Delete cache',k);
      return caches.delete(k);
    })))
  ); 
  self.clients.claim(); 
});
self.addEventListener('fetch',e=>{ 
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); 
});

