const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BH5Flu4EjF6RP9znw1dnqkLsIeQHVdnod_ozd4ip71N1uZLkRHYKtvT98rjjSuqEgCiFkZo4VQRQVNLdYy10Dzw",
  privateKey: "SO4N8Qi3CquPTjALI17qR4yb1qUqknekLCSKYInZisI",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/faVaTPkdy5Q:APA91bFVUHFi1l5neAdVmL_g82qoZecsOnLax8Rmqy3UDYhoWpZt_h6VVvZHTXfwiDxD-kmQx4oiOkJ9uiBwTv5FObfUPoqomRFPrqszpuquLLftmOJxAIocEW4He39rr5V5OSxCjpd7",
  expirationTime: null,
  keys: {
    auth: "4fJpYj-QvBTH5n8V6EM7DA",
    p256dh:
      "BF1lV8snAiwH6aKY-k_OyK9SJj7pGmzBO1q1U30qJYKJVPm4TFCzwyiDf_vIF2itIcVmnk7M5tH16-NgnIFvFLg",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
