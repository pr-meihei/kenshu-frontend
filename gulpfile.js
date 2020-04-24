var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
