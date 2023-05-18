module.exports = {
  name: 'Promovise',
  version: '1.0.0',
  extra: {
    apiUrl: process.env.API_URL,
    firebaseApiKey: process.env.PROMOVISE_FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.PROMOVISE_FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.PROMOVISE_FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.PROMOVISE_FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId:
      process.env.PROMOVISE_FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.PROMOVISE_FIREBASE_MESSAGING_APP_ID,
    firebaseMeasurementId:
      process.env.PROMOVISE_FIREBASE_MESSAGING_MEASUREMENT_ID,
  },
};
