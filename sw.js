// 글자여행 서비스 워커: 한 번 열면 오프라인에서도 열린다. 네트워크가 되면 항상 새 파일을 받아 캐시를 갱신한다.
var CACHE = "geulja-v1";
self.addEventListener("install", function (e) { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var u = new URL(e.request.url);
  var ok = u.origin === location.origin || u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if (!ok) return;
  e.respondWith(fetch(e.request).then(function (r) {
    if (r && (r.ok || r.type === "opaque")) { var c = r.clone(); caches.open(CACHE).then(function (ca) { ca.put(e.request, c); }); }
    return r;
  }).catch(function () { return caches.match(e.request).then(function (m) { return m || caches.match("./"); }); }));
});
