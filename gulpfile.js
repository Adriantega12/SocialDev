const gulp = require('gulp');
const mustache = require('gulp-mustache');
const babel = require('gulp-babel');

// Gulp-Mustache task
gulp.task('mustache', () => {
  gulp.src('./app/templates/**/*.mustache')
    .pipe(mustache({
      fileName:'{{fileName}}',
    }, {
      extension: '.html',
    }, {
      header: './app/partials/header.mustache',
      footer: './app/partials/footer.mustache',
    }))
    .pipe(gulp.dest('./public/views/'));
});

// Gulp-Babel task
gulp.task('babel', () => {
  gulp.src('./app/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(gulp.dest('./public/js/'));
});

// Watch tasks
gulp.task('default', ['mustache', 'babel'], () => {
  gulp.watch('./app/partials/**/*.mustache', ['mustache']);
  gulp.watch('./app/templates/**/*.mustache', ['mustache']);
  gulp.watch('./app/js/**/*.js', ['babel']);
});
