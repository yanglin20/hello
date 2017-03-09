

'use strict'
var gulp=require('gulp');
var less=require('gulp-less');
var cssnano=require('gulp-cssnano');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');
var browserSync=require('browser-sync').create();

//1.LESS编译、压缩，一般没有必要合并，一般预处理CSS都可以导入，即在一个less中导入另一个less
gulp.task('less',function(){
	gulp.src(['src/css/*.less','!src/css/_*.less'])
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
		
});

//2.JS合并、压缩混淆
gulp.task('js',function(){
	gulp.src('src/js/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());

});

//3.image复制
gulp.task('image',function(){
	gulp.src('src/image/u455.png')
		.pipe(gulp.dest('dist/images/'))
		.pipe(browserSync.stream());
})

//4.html压缩、复制
gulp.task('html',function(){
	gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace:true,
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream());
})

//5.浏览器同步：当项目文件被修改时浏览器自动同步刷新
gulp.task('server',['less','js','html','image'],function(){
	browserSync.init({
		server:{
			baseDir:'./dist'
		}
	});
	gulp.watch("src/css/*.less",['less']);
	gulp.watch("src/js/*.js",['js']);
	gulp.watch("src/image/*.*",['image']);
	gulp.watch("src/*.html",['html']);

})






















