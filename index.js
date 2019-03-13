const isCacheAvailable = 'caches' in self;
console.log(`Cache API available: ${isCacheAvailable}`);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed 
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

document.getElementById('saveButton').addEventListener("click", function() {
    caches.open('my-site-cache-images')
    // .then(function(cache) {
    //     return cache.add('/image.png');
    // })
});