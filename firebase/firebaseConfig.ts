import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseMeasurementId,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
} from '@/env';

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
  measurementId: firebaseMeasurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
