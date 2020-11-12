const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

const lessPath = 'less/bundle.less'

function styles() {
  return gulp
    .src(lessPath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./'))
}

module.exports = () => {
  gulp.watch(['./less/**/*.less'], styles)
}
