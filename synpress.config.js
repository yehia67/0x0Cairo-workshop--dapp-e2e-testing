const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  const getEnvValue = (key) => {
    if (process.env[key] !== undefined) {
      return process.env[key];
    } else {
      return config.env[key];
    }
  };

  const baseURL = getEnvValue("CYPRESS_BASE_URL") || config.env.BASE_URL;
  config.env.BASE_URL = baseURL;
  console.log(`The e2e tests will be executed at the URL: ${baseURL}`);

  config.video = Boolean(getEnvValue("CYPRESS_VIDEO_ENABLED"));
  config.videoCompression = Number(getEnvValue("CYPRESS_VIDEO_COMPRESSION"));

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  require("cypress-fail-fast/plugin")(on, config);

  on("before:browser:launch", (browser = {}, launchOptions, config) => {
    if (!browser.isHeadless) return;

    // the browser width and height we want to get
    // our screenshots and videos will be of that resolution
    const width = 1920;
    const height = 1080;

    launchOptions.args.push("--lang=en-US");
    launchOptions.args.push("--force-lang=en-US");

    if (browser.name === "chrome" && browser.isHeadless) {
      launchOptions.args.push(`--window-size=${width},${height}`);

      // force screen to be non-retina and just use our given resolution
      launchOptions.args.push("--force-device-scale-factor=1");
    }

    if (browser.family === "chromium" && browser.name !== "electron") {
      // Assicurati di sostituire 'C:\\Path\\To\\Your\\Chrome\\Profile' con il percorso reale
      launchOptions.args.push(
        "--user-data-dir=C:\\Path\\To\\Your\\Chrome\\Profile"
      );
      launchOptions.args.push("--profile-directory=Cypress");
      launchOptions.args.push("--lang=en-US");
      launchOptions.args.push("--no-first-run");
      launchOptions.args.push("--no-default-browser-check");
      launchOptions.args.push("--disable-features=PromptOnMultipleDownload");
    }

    if (browser.name === "electron" && browser.isHeadless) {
      // might not work on CI for some reason
      launchOptions.preferences.width = width;
      launchOptions.preferences.height = height;
    }

    if (browser.name === "firefox" && browser.isHeadless) {
      launchOptions.args.push(`--width=${width}`);
      launchOptions.args.push(`--height=${height}`);
    }

    // IMPORTANT: return the updated browser launch options
    return launchOptions;
  });

  synpressPlugins(on, config);

  const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
  const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

  on(
    "file:preprocessor",
    createBundler({
      plugins: [esbuildPlugin.createEsbuildPlugin(config)],
    })
  );

  on("task", {
    failFastResetSkip() {
      // Implement the logic for this task
      // For example:
      console.log("Resetting fail-fast skip status");
      // You might want to reset some global state or perform some action
      return null; // Tasks must return null if they don't have a meaningful return value
    },
  });

  return config;
}

module.exports = defineConfig({
  // projectId: "5q6ofx",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 120000,
  e2e: {
    setupNodeEvents,
    video: false,
    videoCompression: 32,
    videosFolder: "cypress/report/video",
    screenshotsFolder: "cypress/report/screenshots",
    specPattern: ["**/*.feature", "cypress/tests/**/*.cy.{js,jsx,ts,tsx}"],
    scrollBehavior: "nearest",
    supportFile: "cypress/support/e2e-synpress.js",
  },
  env: {
    TAGS: "not @ignore",
    BASE_URL: "https://app.dev.librecapital.com",
    CYPRESS_VIDEO_ENABLED: true,
    CYPRESS_VIDEO_COMPRESSION: 32,
  },
  browser: {
    name: "chrome",
    arguments: ["--lang=en-US"],
  },
  synpress: {
    walletConnect: {
      // WalletConnect configuration options
      bridge: "https://bridge.walletconnect.org",
      qrcodeModal: true,
    },
  },
});
