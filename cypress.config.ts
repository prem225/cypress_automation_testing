import { defineConfig } from "cypress";
import { queryTestDb } from "./cypress/functions/random"

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task",{
        queryDb:(query)=>{
          return queryTestDb(query, config);
        }
      })
    },
  },
  env: {
    TOKEN:
      "Bearer " +
      "d7773c7b9e932dd4b231a92e2db271c96ad6d80a64a9e72e66add31f3ad14d00",
  db: {
    server: "127.0.0.1",
    user: "root",
    password: "root",
    database: "new_schema"
  }
  },
});