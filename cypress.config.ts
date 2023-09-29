import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    TOKEN:
      "Bearer " +
      "d7773c7b9e932dd4b231a92e2db271c96ad6d80a64a9e72e66add31f3ad14d00",
    DB_HOST: "sql12.freesqldatabase.com",
    DB_PORT: 3306,
    DB_USER: "sql12649454",
    DB_PASSWORD: "Kn2HBn7nEL",
    DB_NAME: "sql12649454",
  },
});
