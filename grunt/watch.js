module.exports = {
    app: {
        files: [
            'src/js/app.js',
            'src/js/app/*.js',
            'src/js/app/**/*.js'
        ],
        tasks: ['js-app'],
        options: {
            spawn: false
        }
    },
    gui: {
        files: [
            'src/js/gui.js',
            'src/js/gui/*.js',
            'src/js/gui/**/*.js'
        ],
        tasks: ['js-gui'],
        options: {
            spawn: false
        }
    },
    lib: {
        files: [
            'src/js/lib/*.js'
        ],
        tasks: ['js-lib'],
        options: {
            spawn: false
        }
    },
    main: {
        files: [
            'src/scss/*.scss'
        ],
        tasks: ['css-main'],
        options: {
            spawn: false
        }
    }
};