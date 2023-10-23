const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
	defaultCommandTimeout: 180000,
	pageLoadTimeout: 180000,
	e2e: {
		baseUrl: "https://telnyx.com",
		specPattern: "./cypress/integration/features/*.feature",
		async setupNodeEvents(on, config) {
			await allureWriter(on, config);
			await addCucumberPreprocessorPlugin(on, config);
			on(
				"file:preprocessor",
				createBundler({
					plugins: [createEsbuildPlugin.default(config)],
				})
			);
			return config;
		},
		env: {
			allureReuseAfterSpec: true,
		},
		viewportWidth: 1440,
		viewportHeight: 900,
	},
});
