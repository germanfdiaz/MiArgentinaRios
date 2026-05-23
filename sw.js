const CACHE_NAME = 'v1_cache_miapp';
const urlsToCache = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});

window.addEventListener('load', () => {
    const splash = document.getElementById('custom-splash');
    
    // Espera 3 segundos (3000ms) antes de desaparecer
    setTimeout(() => {
        splash.style.opacity = '0';
        
        // Lo eliminamos del DOM después de la transición para que no moleste
        setTimeout(() => {
            splash.remove();
        }, 500); 
    }, 3000); 
});