// @ts-nocheck
import 'react-native-dotenv';
module.exports = {
  expo: {
    extra: {
      eas: {
        projectId: '6ad19515-d43a-4745-a437-1f2d77ed673e',
      },
      apiUrl: process.env.PROMOVIZE_API_URL,
      google: {
        googleClientId: process.env.PROMOVIZE_GOOGLE_CLIENT_ID,
        googleIosClientId: process.env.PROMOVIZE_GOOGLE_IOS_CLIENT_ID,
        googleAndroidClientId: process.env.PROMOVIZE_GOOGLE_ANDROID_CLIENT_ID,
        googleExpoClientId: process.env.PROMOVIZE_GOOGLE_EXPO_CLIENT_ID,
      },
    },
    name: 'Promovize',
    slug: 'Promovize',
    scheme: 'promovize',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/app_icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#1B45B9',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.promovize.promovize',
    },
    android: {
      package: 'com.promovize.promovize',
      adaptiveIcon: {
        foregroundImage: './src/assets/app_icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './src/assets/app_icon.png',
      bundler: 'metro',
    },
  },
  runtimeVersion: 'exposdk:48.0.0',
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  updates: {
    url: process.env.PROMOVIZE_UPDATES_URL,
  },

  plugins: ['expo-localization'],
};
