const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return gulp
    .src('./src/styles/pages/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
}

function watch() {
  gulp.watch('./src/styles/**/*.scss', { ignoreInitial: false }, buildStyles)
}

exports.buildStyles = buildStyles
exports.watch = gulp.series(watch)
