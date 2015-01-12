var fs = require("fs");

module.exports = function(config) {

  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var customLaunchers = {
    "SL_Chrome": {
      base: "SauceLabs",
      browserName: "chrome",
      platform: "Linux"
    },
    "SL_Chrome_26": {
      base: "SauceLabs",
      browserName: "chrome",
      platform: "Linux",
      version: "26"
    },
    "SL_IE": {
      base: "SauceLabs",
      browserName: "internet explorer"
    },
    "SL_IE_6": {
      base: "SauceLabs",
      browserName: "internet explorer",
      platform: "Windows XP",
      version: "6"
    },
    "SL_Firefox": {
      base: "SauceLabs",
      browserName: "firefox"
    },
    "SL_Firefox_3_6": {
      base: "SauceLabs",
      browserName: "firefox",
      platform: "Linux",
      version: "3.6"
    },
    "SL_safari_ios6": {
      base: "SauceLabs",
      browserName: "iphone",
      platform: "OS X 10.8",
      version: "6.1"
    },
    "SL_android": {
      base: "SauceLabs",
      browserName: "android",
      platform: "linux"
    },
    "SL_android_4_0": {
      base: "SauceLabs",
      browserName: "android",
      platform: "linux",
      version: "4.0"
    },
    "SL_safari": {
      base: "SauceLabs",
      browserName: "safari"
    },
    "SL_safari_5": {
      base: "SauceLabs",
      browserName: "safari",
      platform: "OS X 10.6",
      version: "5"
    },
    "SL_opera": {
      base: "SauceLabs",
      browserName: "opera"
    },
    "SL_opera_11": {
      base: "SauceLabs",
      browserName: "opera",
      platform: "Windows XP",
      version: "11"
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
