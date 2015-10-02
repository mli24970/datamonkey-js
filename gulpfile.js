var gulp = require('gulp'),
    watchify = require('watchify'),
    reactify = require('reactify'), 
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    gulpFilter = require('gulp-filter');
    bower_files = require('main-bower-files');

var config = {
     sassPath: './resources/sass',
     bowerDir: './public/assets/lib/' 
}

// I added this so that you see how to run two watch tasks
gulp.task('css', function () {
    gulp.watch('styles/**/*.css', function () {
        return gulp.src('styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/'));
    });
});

gulp.task("libs", function(){
    var filterJS = gulpFilter('**/*.js');
    gulp.src(bower_files( { paths: {
        bowerDirectory: config.bowerDir,
        bowerrc: './.bowerrc',
        bowerJson: './bower.json'
     }, 
    "overrides": {
        "crossfilter": {
          "main": [
            "crossfilter.js",
          ]
        },
        "socket.io-client": {
          "main": [
            "socket.io.js",
          ]
        },
        "flea": {
              "dependencies": null
            }
    }}), { base: config.bowerDir })
    .pipe(filterJS)
    .pipe(concat('./vendor.js'))
    .pipe(gulp.dest('./public/assets/'));
});

// Just running the two tasks
gulp.task('default', ['libs', 'css']);

