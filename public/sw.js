self.addEventListener('install', function (event) {
    console.log('[serviceWorker] Installing service worker...', event);
});

self.addEventListener('activate', function (event) {
    console.log('[serviceWorker] Activating service worker...', event);
});

self.addEventListener('fetch', function (event) {
    console.log('[serviceWorker] fetch triggered...', event);
    event.respondWith(fetch(event.request));
});