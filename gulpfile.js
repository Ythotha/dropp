var gulp = require ('gulp');
var autoprefixer = require('gulp-autoprefixer');
var	sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('css/scss/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(gulp.dest('css/', ['object']));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/scss/**/*.scss', ['sass']);
});
	


gulp.task('default', ['sass:watch', 'sass'])