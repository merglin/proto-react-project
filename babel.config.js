const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
      targets: {
        browsers: [
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Safari versions",
          "last 2 iOS versions",
          "last 1 Android version",
          "last 1 ChromeAndroid version",
          "ie 11",
        ],
      },
    },
  ],
  "@babel/preset-react",
];

const env = {
  test: {
    plugins: ["transform-es2015-modules-commonjs"],
  },
};

module.exports = { presets, env };
