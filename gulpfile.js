const { src, dest, watch } = require('gulp');

const gSass = require('gulp-sass');
const gSourcemaps = require('gulp-sourcemaps');
const gConcat = require('gulp-concat');
const gIf = require('gulp-if');

gSass.compiler = require('node-sass');

const { isProduction, sassIncludePaths, sassOutputStyle, sassGlob, sassDest, sassAll, sassMapSource } = require('./config/gulp');

function sass() {
  return src(sassGlob)
    .pipe(gIf(!isProduction, gSourcemaps.init()))
    .pipe(gSass({ outputStyle: sassOutputStyle, includePaths: sassIncludePaths }).on('error', gSass.logError))
    .pipe(gConcat(sassAll))
    .pipe(
      gIf(
        !isProduction,
        gSourcemaps.mapSources((sP) => sassMapSource + sP),
      ),
    )
    .pipe(gIf(!isProduction, gSourcemaps.write('.')))
    .pipe(dest(sassDest));
}

exports.sass = sass;
exports.sassWatch = () => {
  watch(sassGlob, { ignoreInitial: false }, sass);
};
