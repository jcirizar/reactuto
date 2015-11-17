'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    livereload = require('gulp-livereload');

var browserify = require('browserify');
var fs = require('fs');

var scssAssets = './styles.scss';
var mainJs = "./src/script.jsx";

gulp.task('sass', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 4 versions']
    }),
    mqpacker,
    csswring
  ];

  return gulp.src(scssAssets)
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulp.dest('.'))
      .pipe(livereload());
});

gulp.task('react', function() {
  browserify(mainJs)
      .transform("babelify", {presets: ['es2015', 'react']})
      .bundle()
      .pipe(fs.createWriteStream("bundle.js"));
});



gulp.task('default', function() {
  livereload.listen();
  gulp.watch(scssAssets, ['sass']);
  gulp.watch(mainJs, ['react']);
});
