
var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var minify = require('gulp-minify-css');

gulp.task('script',['style'], function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});

gulp.task('style', function () {
   gulp.src('css/*.css')
       .pipe(minify())
       .pipe(gulp.dest('build/'));
});
