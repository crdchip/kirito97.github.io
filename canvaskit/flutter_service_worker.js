'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "68577746bd9a058b692e12b319af9dcf",
"assets/AssetManifest.bin.json": "68dc150a9c1f3cb0d1030eb2bd8b6deb",
"assets/AssetManifest.json": "596cf91395b1f7b5deb764fbb7576388",
"assets/assets/images/add.png": "6d275ec2c9ec88f42ad3dfb340994308",
"assets/assets/images/appstore.png": "444b1280b3d18ec8dcac1d30a6eb264c",
"assets/assets/images/asd.jpg": "bfdf4e39c885e294b14fd0c656488636",
"assets/assets/images/avatar_private.png": "502a73beb3f9263ca076457d525087c6",
"assets/assets/images/background.png": "2c8a8c158c904258450442709bac8a69",
"assets/assets/images/background_user.png": "a6f804e0d86977fcefebb3aae9367b0e",
"assets/assets/images/check.jpg": "f96e464b4276e60db9629c77d1605694",
"assets/assets/images/dark_mode.png": "63896241db1f7d5f88e707b446d540e1",
"assets/assets/images/empty.jpg": "22733704e1675e17ff78add1367c8b97",
"assets/assets/images/ggmap.png": "c0a02bc418f310e9e180094b72671c2d",
"assets/assets/images/icon_questions_light.png": "ffeefc378db8c2396ca9eb60ee353121",
"assets/assets/images/image_profile.png": "972bd74cc6d1a11ea0995b2ef3947d0a",
"assets/assets/images/light_mode.png": "d916b8ccee9e4cd3f4f6238f9be6af4b",
"assets/assets/images/logo@2x.png": "a5387995f20e969c43a51e1869ba231a",
"assets/assets/images/logo_icon_app.png": "3fefd90649da96c52293fe26d82b5364",
"assets/assets/images/person.png": "bef9cc0e52e2a81c83b5173d7afb68a8",
"assets/assets/images/playstore.png": "18c94ea5662e7e2b5927b3ae78c12ed0",
"assets/assets/images/QuyDinh.jpg": "f21efb84d938f5afd82c42d14bc5ac9a",
"assets/assets/images/reload.png": "1b826b604ab446133acb3fca2e4edac7",
"assets/assets/images/share.png": "5605e1c4edfa13bafe0dc20401e9b31f",
"assets/assets/images/transport.svg": "61087c8c0abfdc105b2f9a6aaf5393c8",
"assets/assets/images/wait.svg": "4ae597cce3e80ddbd779a534a502b17a",
"assets/assets/timelines/check.png": "6a4885e706ddcdce5168c99ea19bd322",
"assets/assets/timelines/checked.png": "9c0cec2d0f5a8a477b0c57e73e3ff4e4",
"assets/assets/timelines/finish.png": "39ca5c66d022696dacbdb0df1c53d0d2",
"assets/assets/timelines/finished.png": "d41b1bf1b38f23c6c1a9980f51536416",
"assets/assets/timelines/in_car.png": "023f7eaa21e76299109e5fbabe31c0db",
"assets/assets/timelines/in_cared.png": "15b61ac15b0b55a93d810ef6feaa1d40",
"assets/assets/timelines/paked.png": "f7cc7b58090c9552b01968701b7ae3e0",
"assets/assets/timelines/paking.png": "f8a5a23e8d761b7f4486308bf45b3baa",
"assets/assets/timelines/reload.png": "230e477049bd533664491119cfb91ae1",
"assets/assets/timelines/result.png": "b36e688250036a0d6c1dba47a1680723",
"assets/assets/timelines/start_worked.png": "0ffa278db162fdad7544b6040553d12b",
"assets/assets/timelines/start_working.png": "a378ee2ac45e9fb8250fd67ac347f6ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32e2fc8936bcd6e10a4c9cd219b083f3",
"assets/NOTICES": "822ec20b14768df7d50bb09908dc780e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f2a4e017098cb026ba5950ba21625339",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e68717ab84c0005a08072fc2c6bbff4",
"/": "2e68717ab84c0005a08072fc2c6bbff4",
"main.dart.js": "8f16a2d4a0971812edcd1225eeca46db",
"manifest.json": "8b189eba7903cfc53fac674a7017ef28",
"version.json": "8db8d11e79814103bce68b172072e923"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
