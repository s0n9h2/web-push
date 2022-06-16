import { setVapidDetails, sendNotification } from "web-push";

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BH5Flu4EjF6RP9znw1dnqkLsIeQHVdnod_ozd4ip71N1uZLkRHYKtvT98rjjSuqEgCiFkZo4VQRQVNLdYy10Dzw",
  privateKey: "SO4N8Qi3CquPTjALI17qR4yb1qUqknekLCSKYInZisI",
};

setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: ".....",
  keys: {
    auth: ".....",
    p256dh: ".....",
  },
};

sendNotification(pushSubscription, "Your Push Payload Text");
