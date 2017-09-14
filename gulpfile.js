// Requirements
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    compass = require('gulp-compass'),
    minify = require('gulp-minify');

// Default Tasks
gulp.task('default',function() {

  // Watch JS
  watch('js/behavior/src/*.js',function() {

    // Minify JS - https://www.npmjs.com/package/gulp-minify
    return gulp.src(['js/behavior/src/*.js'])
    .pipe(
      minify({
        ext: {
          src: '.js',
          min: '.js'
        },
        noSource: true
      })
    )
    .pipe(
      gulp.dest('js/behavior')
    ); // end minify js

  }); // end watch js

  // Watch SCSS
  watch('scss/**/*.scss',function() {

    // Compile SCSS - https://www.npmjs.com/package/gulp-compass
    return gulp.src(['scss/*.scss'])
    .pipe(
      compass({
        js: 'js',
        css: 'css',
        sass: 'scss',
        image: 'images',
        style: 'compressed',
//      style: 'compact',
        comments: false
      })
    )
    .pipe(
      gulp.dest('css')
    ); // end compile scss

  }); // end watch scss

}); // end default tasks
