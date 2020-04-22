var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
