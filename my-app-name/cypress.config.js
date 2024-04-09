import vitePreprocessor from "cypress-vite";
import {defineConfig} from "cypress";



// noinspection JSUnusedGlobalSymbols
import registerCodeCoverageTasks from '@cypress/code-coverage/task.js';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor())
      registerCodeCoverageTasks(on, config)
      return config
    },
  },
});
