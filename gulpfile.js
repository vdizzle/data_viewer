'use strict';

var browserify = require('browserify'),
    del = require('del'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    minifycss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    reactify = require('reactify'),
    source = require("vinyl-source-stream"),
    transform = require('vinyl-transform');

var path = {
  main: {
    js: './assets/js/main.js',
    css: './assets/sass/main.scss'
  },
  src: {
    js: ['./assets/js/**/*.js'],
    css: ['./assets/sass/**/*.scss'],
    images: ['./assets/images/**/*']
  },
  dest: {
    js: './dist/js',
    css: './dist/css',
    images: './dist/images'
  }
}

gulp.task('clean', function(cb) {
  del([path.dest.js, path.dest.css, path.dest.images], cb)
});

gulp.task('lint', function() {
  return gulp.src(path.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
  var b = browserify(),
      browserified,
      stream;

  b.transform(reactify);
  b.add(path.main.js);
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(path.dest.js))
    .pipe(notify({ message: 'JS task complete' }));
});

gulp.task('sass', function() {
 return  gulp.src(path.main.css)
    .pipe(sass())
    .pipe(gulp.dest(path.dest.css))
    .pipe(notify({ message: 'SASS task complete' }));
});

gulp.task('images', function() {
  return gulp.src(path.src.images)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dest.images));
});

gulp.task('watch', function() {
  gulp.watch([path.main.js, path.src.js], ['lint', 'js']);
  gulp.watch([path.main.css, path.src.css] ['sass']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('lint', 'js', 'sass', 'images', 'watch');
});
