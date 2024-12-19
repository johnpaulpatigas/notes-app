self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches
            .open("static-cache")
            .then((cache) => {
                return cache.addAll(["./", "./index.html", "./assets/", "./icons/"]);
            })
            .catch((error) => {
                console.error("Caching failed:", error);
            })
    );
});
