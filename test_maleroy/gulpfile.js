const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass');
const nunjucksRender = require('gulp-nunjucks-render');
//const htmlclean = require('gulp-htmlclean');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');


// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});


//html
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(sourcemaps.init())
        .pipe(nunjucksRender({
            path: ['src/template/'] // String or Array
        }))
		/*.pipe(htmlclean({
			protect: /<\!--%fooTemplate\b.*?%-->/g,
			edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
		}))*/
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});


//css
gulp.task('css', function () {
    gulp.src(['src/stylesheets/**/*.*'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('> 0.1%'))
		.pipe(gcmq())
        .pipe(sourcemaps.write())
		.pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


//img
gulp.task('img', function () {
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
});


//js
gulp.task('js', function () {
    gulp.src('src/js/**/*.*')
		.pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


//fonts
gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(browserSync.stream());
});


// watch
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/stylesheets/**/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/images/**', ['img']);
    gulp.watch('src/fonts/**', ['fonts']);
});


//default
gulp.task('default', ['browser-sync','js', 'html', 'css', 'img',  'fonts',  'watch']);
