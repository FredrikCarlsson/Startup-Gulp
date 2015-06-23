var gulp = require('gulp'),								//Gulp core
	uglify = require('gulp-uglify'), 					//minify's Javascript
	sass = require('gulp-sass'),						//Sass Compiler
	minifycss = require('gulp-minify-css'),				//Minify's CSS
	plumber = require('gulp-plumber'),					//Disable Interuption
	imagemin = require('gulp-imagemin'),				//Minify's image size
	prefix = require('gulp-autoprefixer'),				//Add missing browserprefixes
	livereload = require('gulp-livereload'),			//Reloads page with Livereload	
	connect = require('gulp-connect');
	
/*************************************************************
Scripts Task
Uglifies
*************************************************************/
gulp.task('scripts', function(){
	gulp.src('js/*.js')    						//Script is placed
	.pipe(plumber())							//Disable interupions
	.pipe(uglify())								//Minify the code
	.pipe(gulp.dest('build/js'))				//Move it to a new destiantion
});

/*************************************************************
Styles Task
Uglify CSS
*************************************************************/
gulp.task('styles', function(){
	gulp.src('css/*.scss')					//Script is placed
		.pipe(plumber())					//Disable interuptions
		.pipe(sass())						//Compile it to Sass
		.pipe(minifycss())					//Minify the CSS file
		.pipe(prefix('last 2 versions'))	//Broweserprefix the last two versions of browsers
		.pipe(gulp.dest('build/css'));		//Move it to a new destination
				
});

/*************************************************************
Styles Task
Uglify CSS FOR RESPONSIVE CSSFILE
*************************************************************/
gulp.task('responsive', function(){
	gulp.src('responsive/*.scss')					//Script is placed
		.pipe(plumber())					//Disable interuptions
		.pipe(sass())						//Compile it to Sass
		.pipe(minifycss())					//Minify the CSS file
		.pipe(prefix('last 2 versions'))	//Broweserprefix the last two versions of browsers
		.pipe(gulp.dest('build/css'));		//Move it to a new destination
				
});

/*************************************************************
Image task
Compresses images
*************************************************************/
gulp.task('image', function(){
	gulp.src('img/*')						//Were the images are located
		.pipe(imagemin())					//Minify the images of meta information
		.pipe(gulp.dest('build/img'));		//Move it to a new destination
});

/*************************************************************
Watch Task
Watches Javascript for changes
*************************************************************/
gulp.task('watch', function(){
	var server = livereload();			

	gulp.watch('responsive/*.scss', ['responsive']); //Watches the responsive CSS for changes
	gulp.watch('js/*.js', ['scripts']);		//Watches the Javascript for changes
	gulp.watch('css/*.scss', ['styles'])	//Watches the CSS for changes
});





gulp.task('default', ['scripts', 'styles', 'image', 'watch', 'responsive']);		//Type gulp to run the file