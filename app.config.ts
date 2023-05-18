module.exports = ({ config }: any) => ({
  ...config,
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  updates: {
    url: process.env.PROMOVIZE_UPDATES_URL,
  },
  extra: {
    apiUrl: process.env.API_URL,
    firebaseApiKey: process.env.PROMOVIZE_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.PROMOVIZE_FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.PROMOVIZE_FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.PROMOVIZE_FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId:
      process.env.PROMOVIZE_FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.PROMOVIZE_FIREBASE_MESSAGING_APP_ID,
    firebaseMeasurementId:
      process.env.PROMOVIZE_FIREBASE_MESSAGING_MEASUREMENT_ID,
    eas: {
      projectId: process.env.PROMOVIZE_EAS_PROJECT_ID,
    },
  },
});
