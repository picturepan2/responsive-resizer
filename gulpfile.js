var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var autoprefix= new LessPluginAutoPrefix({ browsers: ["last 4 versions"] });

gulp.task('watch', function() {
    gulp.watch('./**/*.less', ['build']);
});

gulp.task('build', function() {
    gulp.src('./assets/src/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(csscomb())
        .pipe(gulp.dest('./assets/css'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('default', ['build']);
