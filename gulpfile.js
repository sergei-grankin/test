'use scrict';

var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('build-styles', function() {
	return gulp.src('./dev/scss/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/styles'));
});

gulp.task('build-scripts', function() {
	return webpack(webpackConfig, function(err, stats) {
		console.log(err);
	});
});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: './build/'
		}
	});

	browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
	gulp.watch('./dev/scss/**/*.*', gulp.series('build-styles'));

	gulp.watch('./dev/scripts/**/*.js', gulp.series('build-scripts'));
});

gulp.task('build', gulp.parallel('build-styles', 'build-scripts', 'server'));

gulp.task('dev', gulp.parallel('build', 'watch'));
