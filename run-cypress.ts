import cypress from "cypress";
import dotenv from "dotenv";

dotenv.config();

const specFiles = (process.env.SPECS || "").split(",");

if (specFiles.length === 0) {
  throw new Error(
    "No spec files specified in CYPRESS_SPECS environment variable."
  );
}

const specPaths = specFiles
  .map((spec) => `cypress/e2e/APItesting/${specFiles}.cy.ts`)
  .join(",");

console.log(`Running spec files: ${specPaths}`);

cypress
  .run({
    spec: specPaths,
  })
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });

const dbConfig = {
  host: process.env.DB_HOST,
  port: (process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export default dbConfig;
