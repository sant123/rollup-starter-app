exports.getConfig = function (environment, isProduction) {
  const sassIncludePaths = [`./config/env/${environment}`];
  const sassOutputStyle = isProduction ? 'compressed' : 'nested';

  const sassAll = 'style.css';
  const sassDest = './public/dist';
  const sassGlob = './src/**/*.scss';
  const sassMapSource = '../../src/';

  return {
    sassAll,
    sassDest,
    sassGlob,
    sassMapSource,
    sassIncludePaths,
    sassOutputStyle,
  };
};
