module.exports = {
	dev : {
		nonull: true,
		files : [
			// Include our bower JS dependencies

			// angular
			{
				src : "bower_components/angular/angular.js",
				dest: "src/vendor/angular/angular.js"
			},
			{
				src : "bower_components/angular-animate/angular-animate.js",
				dest: "src/vendor/angular/angular-animate/angular-animate.js"
			},
			{
				src : "bower_components/angular-cookies/angular-cookies.js",
				dest: "src/vendor/angular/angular-cookies/angular-cookies.js"
			},
			{
				src : "bower_components/angular-resource/angular-resource.js",
				dest: "src/vendor/angular/angular-resource/angular-resource.js"
			},
			{
				src : "bower_components/angular-sanitize/angular-sanitize.js",
				dest: "src/vendor/angular/angular-sanitize/angular-sanitize.js"
			},
			{
				src : "bower_components/angular-touch/angular-touch.js",
				dest: "src/vendor/angular/angular-touch/angular-touch.js"
			},

			// bootstrap
			{
				src : "bower_components/bootstrap/dist/css/bootstrap.css",
				dest: "src/css/bootstrap.css"
			},
			{
				src : "bower_components/bootstrap/dist/css/bootstrap.css.map",
				dest: "src/css/bootstrap.css.map"
			},
			{
				src : "bower_components/bootstrap/dist/js/bootstrap.js",
				dest: "src/vendor/jquery/bootstrap.js"
			},
			{
				src : "bower_components/jquery/dist/jquery.min.js",
				dest: "src/vendor/jquery/jquery.min.js"
			},
			{
				src : "bower_components/jquery/dist/jquery.min.map",
				dest: "src/vendor/jquery/jquery.min.map"
			},
			{
				src   : "**",
				dest  : "src/fonts",
				cwd   : 'bower_components/bootstrap/fonts',
				expand: true
			},

			// fontawesome
			{
				src : "bower_components/font-awesome/css/font-awesome.min.css",
				dest: "src/css/font-awesome.min.css"
			},
			{
				src   : "**",
				dest  : "src/fonts",
				cwd   : 'bower_components/font-awesome/fonts',
				expand: true
			},

			// libs
			{
				src : "bower_components/moment/min/moment.min.js",
				dest: "src/vendor/libs/moment.min.js"
			},

			// core
			{
				src : "bower_components/angular-ui-router/release/angular-ui-router.js",
				dest: "src/vendor/angular/angular-ui-router/angular-ui-router.js"
			},
			{
				src : "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
				dest: "src/vendor/angular/angular-bootstrap/ui-bootstrap-tpls.js"
			},
			{
				src : "bower_components/angular-ui-utils/ui-utils.js",
				dest: "src/vendor/angular/angular-ui-utils/ui-utils.js"
			},
			{
				src : "bower_components/ngstorage/ngStorage.js",
				dest: "src/vendor/angular/ngstorage/ngStorage.js"
			}
		]
	},
	dist: {
		files: [
			{
				expand: true,
				dest  : "www/",
				src   : "**",
				cwd   : "src/"
			},
			{
				dest: "www/index.html",
				src : "src/index.min.html"
			}
		]
	}
};