var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// compile scss file
gulp.task('sass', function() {
    return gulp.src('./source/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/stylesheet'));
});

// watch and compile scss files
gulp.task('default', ['sass'], function() {
    gulp.watch('./source/sass*.scss', ['sass']);
});