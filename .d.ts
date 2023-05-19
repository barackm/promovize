// declare namespace NodeJS {
//   interface ProcessEnv {
//     PROMOVIZE_FIREBASE_AUTH_DOMAIN: string;
//     PROMOVIZE_FIREBASE_PROJECT_ID: string;
//     PROMOVIZE_FIREBASE_STORAGE_BUCKET: string;
//     PROMOVIZE_FIREBASE_API_KEY: string;
//     PROMOVIZE_FIREBASE_MESSAGING_SENDER_ID: string;
//     PROMOVIZE_FIREBASE_MESSAGING_APP_ID: string;
//     PROMOVIZE_FIREBASE_MESSAGING_MEASUREMENT_ID: string;
//     API_URL: string;
//   }
// }

// environment.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
  }
}
