
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');  //[XXX]: It is needed?
var runSequence = require('run-sequence'); //[XXX]: It is needed?
var tscConfig = require('./tsconfig.json');
var exec = require('child_process').exec;

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('serve', ['build'], function (cb) {
  //gulp.watch(['app/**/*'], ['compile', 'copy:assets']).on('change',function(){
    /*[TODO]: restart of app.js*/
  //});
  exec('node dist/app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('copy:assets', function () {
  return gulp.src(['app/**/*', '!app/**/*.ts'])
    .pipe(gulp.dest('dist'))
});

gulp.task('compile', function () {
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tscConfig.compilerOptions));

  return tsResult.js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function (next) {
  runSequence('clean', ['compile', 'copy:assets'], next);
});

gulp.task('default', ['build']);
