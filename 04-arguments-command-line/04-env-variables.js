// PRODUCTION=true node <file-name>

const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
  console.log('Application is running in PRODUCTION mode');
  // do production things
} else {
  console.log('Application is running in DEVELOPMENT mode');
  // do dev things
}