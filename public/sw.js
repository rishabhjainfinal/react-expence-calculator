let cacheData = "appV1";

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/month",
                "/year",
                "/day",
                "/cal.ico",
                "/cal.png",
                "/manifest.json",
                "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2",
                "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            ]);
        })
    )
});

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result
            }
        })
    )

})
