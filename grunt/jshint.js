module.exports = {
	options: {
		reporter: require('jshint-stylish')
	},
	app: ['src/app/*.js', 'src/app/**/*.js'],
	gui: ['src/gui/*.js', 'src/gui/**/*.js'],
	lib: ['src/lib/*.js']
};