const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vmvrb1',
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 15000,
  reporter: 'mochawesome',
  "env" : 
  {
    "url": "http://localhost/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
