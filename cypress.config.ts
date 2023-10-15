import { defineConfig } from "cypress";
import {addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify  from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
  ): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    on(
      "file:preprocessor",
      browserify(config, {
        typescript: require.resolve("typescript"),
      })
    );
    return config;
  }

export default defineConfig({
  e2e: {
    baseUrl: "https://www.way2automation.com/angularjs-protractor/banking/#/login",
    defaultCommandTimeout: 10000,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});

