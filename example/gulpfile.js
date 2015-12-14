var gulp  = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify'),
	streamify = require('gulp-streamify'),
	watchify = require('watchify'),
	gutil = require('gulp-util'),
	path = require('path');

function bundler(watch, srcPath, destPath, destFileName) {
	var bro = watchify(browserify(srcPath).transform(babelify));

	if (watch) {
		bro.on('update', function(scriptIds) {
			gutil.log(scriptIds[0] + ' rebuilding...');
			rebundle(bro);
		})
		.on('time', function (time) {
			gutil.log('Finished JSX build after ' + (Math.round(time / 10) / 100) + 's');
		});
	}

	function rebundle(pbro) {
		return pbro.bundle()
         .on('error', function(err) { console.error(err); this.emit('end'); })
         .pipe(source(destFileName))
         // .pipe(streamify(uglify()))
         .pipe(gulp.dest(destPath));
	}

	return rebundle(bro);
}

gulp.task('browserify', function() {
	bundler(true, 'index.jsx', 'bin', 'app.min.js');
});

gulp.task('css', function() {
	return gulp.src('css/**/*.css')
         .pipe(gulp.dest('bin'));
});

gulp.task('html', function() {
	return gulp.src('index.html')
         .pipe(gulp.dest('bin'));
});

gulp.task('build', ['browserify', 'html', 'css']);

gulp.task('default', ['build']);