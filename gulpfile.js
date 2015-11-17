'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    livereload = require('gulp-livereload');

var babelify = require('babelify');
var browserify = require('gulp-browserify');
var fs = require('fs');
var rename = require('gulp-rename');

var scssAssets = './styles.scss';
var mainJs = "./src/*.jsx";

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

var bab = babelify.configure({presets: ['es2015', 'react']});

gulp.task('react', function() {
  gulp.src(mainJs).pipe(
      browserify({
        transform: [bab]
      })
  ).pipe(rename({
    extname: '.bundle.js'
  })).pipe(gulp.dest('./dist/'));

});


gulp.task('default', function() {
  livereload.listen();
  gulp.watch(scssAssets, ['sass']);
  gulp.watch(mainJs, ['react']);
});
