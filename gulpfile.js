const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const postcss = require('gulp-postcss')

const watch = require('./gulpwatch')

const haloPath = 'less/halo.less'
const gridPath = 'less/halo/grid/index.less'
const allPath = 'less/index.less'

function buildLess(filePath, name = 'index') {
  return gulp
    .src(filePath)
    .pipe(less())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(cleanCSS())
    .pipe(rename(`${name}.css`))
    .pipe(gulp.dest('./'))
}

async function styles() {
  // await buildLess(basePath, 'base')
  await buildLess(haloPath, 'halo')
  await buildLess(gridPath, 'grid')
  await buildLess(allPath, 'index')
}

exports.watch = watch

exports.default = styles
