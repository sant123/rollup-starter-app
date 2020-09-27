const { getConfig } = require('./sass');

const environment = process.env.NODE_ENV ?? 'development';
const isProduction = environment !== 'development';

const sassConfig = getConfig(environment, isProduction);

module.exports = {
  environment,
  isProduction,
  ...sassConfig,
};
