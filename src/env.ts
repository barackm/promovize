import { Platform } from 'react-native';
import {
  PROMOVIZE_API_URL,
  PROMOVIZE_GOOGLE_IOS_CLIENT_ID,
  PROMOVIZE_GOOGLE_ANDROID_CLIENT_ID,
  PROMOVIZE_GOOGLE_EXPO_CLIENT_ID,
} from '@env';

const ios = Platform.OS === 'ios';
const android = Platform.OS === 'android';

export default {
  apiUrl: PROMOVIZE_API_URL,
  ios,
  android,
  google: {
    googleClientId: '',
    googleIosClientId: PROMOVIZE_GOOGLE_IOS_CLIENT_ID,
    googleAndroidClientId: PROMOVIZE_GOOGLE_ANDROID_CLIENT_ID,
    googleExpoClientId: PROMOVIZE_GOOGLE_EXPO_CLIENT_ID,
  },
};
