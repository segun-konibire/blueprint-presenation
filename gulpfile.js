// grab our gulp packages
var gulp  = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('website/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// configure sass task
gulp.task('sass', function(){
    return gulp.src('website/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('website/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// start web server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'website'
        }
    })
});

// watch changes to HTML, CSS and JS,
gulp.task('watch', ['browserSync'], function (){
    gulp.watch('website/scss/*.scss', ['sass']);
    gulp.watch('website/js/*.js', ['jshint']);
    gulp.watch('website/*.html', browserSync.reload);
});

// define the default task and add the watch task to it
gulp.task('default', ['watch']);





