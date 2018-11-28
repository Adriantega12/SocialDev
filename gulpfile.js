const gulp = require('gulp');
const mustache = require('gulp-mustache');

// Gulp-Mustache tasks
gulp.task('mustache', () => {
  gulp.src('./app/templates/*.mustache')
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

// Watch tasks
gulp.task('default', ['mustache'], () => {
  gulp.watch('./app/partials/**/*.mustache', ['mustache']);
  gulp.watch('./app/templates/**/*.mustache', ['mustache']);
});
