var fs = require("fs");

module.exports = function(config) {

  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    "SL_Chrome": {
      base: "SauceLabs",
      browserName: "chrome",
      platform: "Linux"
    },
    "SL_IE": {
      base: "SauceLabs",
      browserName: "internet explorer"
    },
    "SL_Firefox": {
      base: "SauceLabs",
      browserName: "firefox"
    },
    "SL_android": {
      base: "SauceLabs",
      browserName: "android",
      platform: "linux"
    },
    "SL_safari": {
      base: "SauceLabs",
      browserName: "safari"
    },
    "SL_opera": {
      base: "SauceLabs",
      browserName: "opera"
    }
  };

  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
      "dist/cookies.js",
      "test/unit/**/*.spec.js"
    ],
    reporters: ["dots", "saucelabs"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    sauceLabs: {
      testName: "ElementaryJS cookies framework unit test"
    },
    captureTimeout: 240000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
