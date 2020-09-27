const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const typescript = require('@rollup/plugin-typescript');

const { appReplace, isProduction } = require('./config/rollup');

module.exports = {
  input: './src/index.ts',
  output: {
    file: './public/dist/index.js',
    format: 'iife',
    sourcemap: !isProduction,
  },
  plugins: [replace(appReplace), nodeResolve(), typescript(), commonjs(), isProduction && terser({ format: { comments: false } })],
};
