const gulp = require('gulp');
const babel = require('gulp-babel');

// Gulp-Babel task
gulp.task('babel', () => {
  gulp.src('./source/js/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(gulp.dest('./public/js/'));
});

// Watch tasks
gulp.task('default', ['babel'], () => {
  gulp.watch('./source/js/*.js', ['babel']);
});
