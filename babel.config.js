module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "@": "./src/",
          }
        }
      ],
      require.resolve("expo-router/babel")
    ]
  };
};
