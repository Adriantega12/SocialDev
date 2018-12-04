const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

// Gulp-Sass task
gulp.task('sass', () => {
  gulp.src('./source/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

// Gulp-Babel task
gulp.task('babel', () => {
  gulp.src('./source/js/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(gulp.dest('./public/js/'));
});

// Watch tasks
gulp.task('default', ['babel', 'sass'], () => {
  gulp.watch('./source/js/*.js', ['babel']);
  gulp.watch('./source/sass/*.scss', ['sass']);
});
