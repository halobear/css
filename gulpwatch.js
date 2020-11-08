const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

const lessPath = 'less/index.less'

function styles() {
  return gulp
    .src(lessPath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./'))
}

module.exports = () => {
  styles()
  gulp.watch(['./less/**/*.less'], styles)
}
