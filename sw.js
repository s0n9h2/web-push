// 서비스 워커에서 발생하는 푸시 이벤트를 수신
// self는 서비스 워커 자체를 참조
self.addEventListener("push", (event) => {
  console.log("[Service Worker] Push Received.");
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  var options = {
    body: "Pill my rhythm push notification!",
    icon: "images/example.png",
    badge: "images/badge.png", // android에서만 사용됨
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };

  // 브라우저는 전달된 Promise가 확인될 때까지 서비스 워커를 활성화 및 실행 상태로 유지
  event.waitUntil(self.registration.showNotification("Hello world!", options));
});

self.addEventListener("notificationclick", (event) => {
  console.log("[Service Worker] Notification click Received.");
  // 알림창 닫음
  event.notification.close();
  // URL을 로드하는 새 창이나 탭이 열림
  event.waitUntil(clients.openWindow("https://developers.google.com/web/"));
});
