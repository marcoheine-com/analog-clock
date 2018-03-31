const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('sass', () => {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch("**/*.html").on('change', browserSync.reload);
})