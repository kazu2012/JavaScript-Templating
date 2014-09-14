
//Gulp variables ..................................................
var gulp 		= require('gulp'),
	gutil 		= require('gulp-util'),

	//combine all our javascripts into a single file
	concat 		= require('gulp-concat'),

	//cprocess our 'sass' files
	compass 	= require('gulp-compass'),

	// lets us add librairies as dependencies
	// All JavaScript libraries will be installed as node modules and
	// called within browserify 
	browserify 	= require('gulp-browserify'),

	//reload our pages when anything changes
	connect 	= require('gulp-connect');






//components sources ..............................................
var sources = {
	'js' 	: ['components/scripts/jquery-templating.js',
				'components/scripts/mustache-templating.js',
				'components/scripts/handlebars-templating.js',
				'components/scripts/exe.js'
				],
	'sass' 	: [],
	'html' 	: ['builds/development/*.html'],
	'json' 	: ['builds/development/js/*.json']
};






//components destination ..........................................
var destinations = {
	'js' 	: 'builds/development/js',
	'sass' 	: []
};






//Running tasks ...................................................
//gulp-util task ....................................
gulp.task('log', function(){
	gutil.log('Workflows a great');
});


//process javascript files ..........................
gulp.task('js', function(){
	gulp.src(sources['js'])
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest(destinations['js']))
		.pipe(connect.reload());
});


//process javascript files ..........................
// gulp.task('compass', function(){
// 	gulp.src(sources['sass'])
// 		.pipe(compass({
// 			sass 	: 'components/sass',
// 			image 	: 'builds/development/images',
// 			style 	: 'expanded'
// 		})
// 		.on('error', gutil.log))
// 		.pipe(gulp.dest('builds/development/css'))
// 		.pipe(connect.reload());
// });


//Monitor and update things when they change ........
gulp.task('watch', function(){
	gulp.watch(sources['js'], ['js']);
	//gulp.watch('components/sass/*.scss, ['compass']);
	gulp.watch(sources['html'], ['html']);
	gulp.watch(sources['json'], ['json']);
});


//Keep track of our html files ......................
gulp.task('html', function(){
	gulp.src(sources['html'])
	//and reload the page in case there is any change
		.pipe(connect.reload());
	//gulp.watch('components/sass/*.scss, ['compass']);
});


//Keep track of our json files ......................
gulp.task('json', function(){
	gulp.src(sources['json'])
	//and reload the page in case there is any change
		.pipe(connect.reload());
	//gulp.watch('components/sass/*.scss, ['compass']);
});


//Allow to use the server ...........................
gulp.task('connect', function(){
	connect.server({
		root 		: 'builds/development/',
		livereload 	: true
	});
});


//Automation of all tasks ...........................
// gulp.task('default', ['js', 'log', 'compass', 'connect', 'watch']);

gulp.task('default', ['html', 'json', 'js', 'connect', 'watch' ]);







