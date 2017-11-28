var gulp = require('gulp')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify')
var jade = require('gulp-jade')
var imagemin = require('gulp-imagemin')
var sourcemaps = require('gulp-sourcemaps')
var stylus = require('gulp-stylus')
var runSequence = require('run-sequence')
var plumber = require('gulp-plumber')
var del = require('del');

gulp.task('default', function () {
  gutil.log(gutil.colors.green('message:') + "start gulp")
  // gulp.run('uglifyjs','jade','img','stylus');  
  runSequence(
    'clean', 
    ['uglifyjs', 'jade', 'img', 'stylus'],
    'watch'
  )
})


gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['uglifyjs'])
  gulp.watch('src/page/*.jade', ['jade'])
  gulp.watch('src/img/*', ['img'])
  gulp.watch('src/style/*.styl', ['stylus'])
})

gulp.task('uglifyjs', function () {
  gulp.src('src/js/*.js')
    .pipe(plumber({
      errorHandler: function(e) {
        gutil.log(gutil.colors.red(e) + gutil.colors.yellow("Javascript has been fucked"))
      }
    }))
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('jade', function () {
  gulp.src('src/page/*.jade')
    .pipe(plumber({
      errorHandler: function(e) {
        gutil.log(gutil.colors.red(e) + gutil.colors.yellow("jade has been fucked"))
      }
    }))
    .pipe(jade())
    .pipe(gulp.dest('dist/html'))
})

gulp.task('img', function () {
  gulp.src(['src/img/*', 'src/img/**/*'])
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
})

gulp.task('stylus', function () {
  gulp.src('src/style/*.styl')
  .pipe(plumber({
    errorHandler: function(e) {
      gutil.log(gutil.colors.red(e) + gutil.colors.yellow("stylus has been fucked"))
    }
  }))
  .pipe(stylus({
    'include css': true
  }))
  .pipe(gulp.dest('dist/css'))
})

gulp.task('clean', function() {
  return del(['dist']);
});
