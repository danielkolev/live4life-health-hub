
const CACHE_NAME = 'live4life-v1';
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/specialists',
  '/faq',
  '/blog',
  '/index.css',
  '/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png',
  '/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png',
  '/lovable-uploads/82ba0413-76dc-42b1-8e31-a79b3f160fc8.png',
  '/lovable-uploads/3382e796-4c40-4a9c-b014-7874fc2a9e29.png',
  '/lovable-uploads/2d8e2758-f909-4ca8-84de-9598b438c871.png',
  '/lovable-uploads/5056946d-3cf9-48fd-8ac2-6735c7f60235.png'
];

// Инсталиране на service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Кеширане на статични ресурси...');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Активиране на service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Изтриване на стар кеш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Обслужване на заявки
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Връщане от кеш, ако съществува
        if (response) {
          return response;
        }
        
        // Клониране на заявката
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Проверка дали получихме валиден отговор
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Клониране на отговора
          const responseToCache = response.clone();
          
          // Кеширане на нови ресурси
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});
