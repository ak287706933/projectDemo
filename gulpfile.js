var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

gulp.task("js",function(){
	gulp.src('./js/index.js').pipe(uglify()).pipe(gulp.dest('./dist'));
})

gulp.task("css",function(){
	gulp.src('./css/index.css').pipe(cssnano()).pipe(gulp.dest('./dist'));
})