'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    plugins = require('gulp-load-plugins')(),
    path = function (dir) {
      return ('public/' + (dir || ''));
    },
    scripts = {
      app: [
        path('js/app/lib.js'),
        path('js/init.js'),
        path('js/app/views.js'),
        path('js/app/main.js')
      ],
      applib: [
        path('js/lib/jquery-1.11.3.min.js'),
        path('js/lib/fugue.js'),
        path('js/lib/moment.min.js'),
        path('js/lib/tabswitchplus.js'),
        path('js/lib/bootstrap-datepicker.js'),
        path('js/lib/jquery.textarea-autosize.js'),
        path('js/lib/mobile-detect.js'),
        path('js/lib/underscore-min.js'),
        path('js/lib/backbone-min.js')
      ],
      admin: [
        path('js/admin/lib.js'),
        path('js/init.js'),
        path('js/admin/views.js'),
        path('js/admin/main.js')
      ],
      adminlib: [
        path('js/lib/jquery-1.11.3.min.js'),
        path('js/lib/fugue.js'),
        path('js/lib/moment.min.js'),
        path('js/lib/tabswitch.js'),
        path('js/lib/Chart.min.js'),
        path('js/lib/bootstrap-datepicker.js'),
        path('js/lib/jquery.textarea-autosize.js'),
        path('js/lib/calendar/fullcalendar.min.js'),
        path('js/lib/underscore-min.js'),
        path('js/lib/backbone-min.js'),
        path('js/lib/autosize.min.js'),
        path('js/lib/redactor.min.js')
      ],
      dest: path('js')
    },
    styles = {
      app: path('css/sass/app.sass'),
      admin: path('css/sass/admin.sass'),
      lib: [
        path('css/core/*.css'),
        path('css/lib/*.css')
      ],
      all: path('css/sass/*.sass'),
      dest: path('css')
    };

gulp.task('applib', function () {
  return gulp.src(scripts.applib)
  .pipe(plugins.concat('lib.js'))
  .pipe(gulp.dest(scripts.dest + '/app'));
});
gulp.task('appjs', ['applib'], function () {
  var isProduction = gulp.env.type === 'production';

  return gulp.src(scripts.app)
  .pipe(plugins.concat('app.js'))
  .pipe(gulpif(isProduction, plugins.uglify()))
  .pipe(gulp.dest(scripts.dest));
});

gulp.task('adminlib', function () {
  return gulp.src(scripts.adminlib)
  .pipe(plugins.concat('lib.js'))
  .pipe(gulp.dest(scripts.dest + '/admin'));
});
gulp.task('adminjs', ['adminlib'], function () {
  var isProduction = gulp.env.type === 'production';

  return gulp.src(scripts.admin)
  .pipe(plugins.concat('admin.js'))
  .pipe(gulpif(isProduction, plugins.uglify()))
  .pipe(gulp.dest(scripts.dest));
});

gulp.task('appsass', function () {
  return gulp.src(styles.app)
  .pipe(plugins.sass())
  .pipe(plugins.minifyCss())
  .pipe(gulp.dest(styles.dest));
});
gulp.task('adminsass', function () {
  return gulp.src(styles.admin)
  .pipe(plugins.sass())
  .pipe(plugins.minifyCss())
  .pipe(gulp.dest(styles.dest));
});

gulp.task('csslib', ['appsass', 'adminsass'], function () {
  return gulp.src(styles.lib)
  .pipe(plugins.autoprefixer())
  .pipe(plugins.csscomb())
  .pipe(plugins.minifyCss())
  .pipe(plugins.concat('lib.css'))
  .pipe(gulp.dest(styles.dest));
});

gulp.task('watch', function () {
  gulp.watch(scripts.app, ['appjs']);
  gulp.watch(scripts.admin, ['adminjs']);
  gulp.watch(styles.all, ['appsass', 'adminsass']);
});

gulp.task('release', ['appjs', 'adminjs', 'csslib']);

gulp.task('default', ['watch']);
