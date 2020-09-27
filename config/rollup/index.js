// const fs = require('fs-extra');

const environment = process.env.NODE_ENV ?? 'development';
const isProduction = environment !== 'development';

// const config = fs.readJSONSync(`config/env/${environment}/config.json`);

const appReplace = {
  // __someToReplace__: JSON.stringify(config.someToReplace),
};

module.exports = {
  environment,
  isProduction,
  appReplace,
};
