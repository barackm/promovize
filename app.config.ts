// @ts-nocheck
module.exports = ({ config }: any) => ({
  expo: {
    extra: {
      eas: {
        projectId: '6ad19515-d43a-4745-a437-1f2d77ed673e',
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
      googleServicesFile: 'GoogleService-Info.plist',
      bundleIdentifier: 'com.promovize.promovize',
    },
    android: {
      googleServicesFile: 'google-services.json',
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
  extra: {
    apiUrl: process.env.API_URL,
    eas: {
      projectId: process.env.PROMOVIZE_EAS_PROJECT_ID,
    },
  },
  plugins: [
    'expo-localization',
    '@react-native-firebase/app',
    '@react-native-google-signin/google-signin',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
});
