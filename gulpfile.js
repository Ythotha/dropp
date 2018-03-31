var gulp = require ('gulp');
var autoprefixer = require('gulp-autoprefixer');
var	sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(gulp.dest('css/', ['object']));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});
	


gulp.task("default", ["sass"])