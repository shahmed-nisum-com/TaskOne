/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config

//   on('before:browser:launch', (browser = {}, args) => {
//     if (browser.name === 'chrome') {
//       args.push('--disable-site-isolation-trials');

//       return args
//     }
//   })
// }

// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, launchOptions) => {
//     // `args` is an array of all the arguments that will
//     // be passed to browsers when it launches
//     console.log(launchOptions.args) // print all current args

//     if (browser.family === 'chromium' && browser.name !== 'electron') {
//       // auto open devtools
//       launchOptions.args.push('--auto-open-devtools-for-tabs')

//       // whatever you return here becomes the launchOptions
//       return launchOptions
//     }

//     if (browser.family === 'firefox') {
//       // auto open devtools
//       launchOptions.args.push('-devtools')

//       return launchOptions
//     }
//   })
// }


const path = require('path');

// module.exports = (on, config) => {
//   on('before:browser:launch', (browser = {}, args) => {
//     console.log(config, browser, args);
//     if (browser.name === 'chrome') {
//       const ignoreXFrameHeadersExtension = path.join(__dirname, '../extensions/ignore-x-frame-headers');
//       args.push(args.push(`--load-extension=${ignoreXFrameHeadersExtension}`));
//       args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
//     }
//     return args;
//   });
// };

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, args) => {
    if (browser.name === "chrome" || browser.name === "electron") {
      args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
      args.push("--load-extension=cypress/extensions/Ignore-X-Frame-headers_v1.1");
      return args;
    }
  });
};