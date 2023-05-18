import { Platform } from 'react-native';
import Constants from 'expo-constants';

export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';
export const firebaseApiKey = Constants?.expoConfig?.extra?.firebaseApiKey;
export const firebaseAuthDomain =
  Constants?.expoConfig?.extra?.firebaseAuthDomain;
export const firebaseProjectId =
  Constants?.expoConfig?.extra?.firebaseProjectId;
export const firebaseStorageBucket =
  Constants?.expoConfig?.extra?.firebaseStorageBucket;
export const firebaseMessagingSenderId =
  Constants?.expoConfig?.extra?.firebaseMessagingSenderId;
export const firebaseAppId = Constants?.expoConfig?.extra?.firebaseAppId;
export const firebaseMeasurementId =
  Constants?.expoConfig?.extra?.firebaseMeasurementId;
