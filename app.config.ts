// @ts-nocheck
module.exports = ({ config }: any) => ({
  ...config,
  // runtimeVersion: {
  //   policy: 'sdkVersion',
  // },
  updates: {
    url: process.env.PROMOVIZE_UPDATES_URL,
  },
  extra: {
    apiUrl: process.env.API_URL,
    eas: {
      projectId: process.env.PROMOVIZE_EAS_PROJECT_ID,
    },
  },
  plugins: ['expo-localization'],
});
