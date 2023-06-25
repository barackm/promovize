module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@": "./src/",
          }
        }
      ],
      require.resolve("expo-router/babel"),
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false
      }]
    ]
  };
};
