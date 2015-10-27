import gulp from 'gulp'
import config from '../config/jade'
import errorHandler from '../helpers/errorHandler'

import gulpJade from 'gulp-jade'

const YOUR_LOCALS = {}

gulp.task('jade', () => 
  gulp
    .src(config.src)
    .pipe(errorHandler())
    .pipe(gulpJade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest(config.dest))
)
