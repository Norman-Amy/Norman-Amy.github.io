var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function() {
  return gulp.src('elements2/elements2.html')
    .pipe(vulcanize())
    .pipe(gulp.dest('dist/elements'));
});

gulp.task('default', ['vulcanize']);
