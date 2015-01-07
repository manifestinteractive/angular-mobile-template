module.exports = {
    app: {
        files: {
            'src/css/app.css': 'src/css/scss/app.scss'
        }
    },
    fa: {
        files: [{
            expand: true,
            cwd: 'src/css/scss/font-awesome',
            src: ['font-awesome.scss'],
            dest: 'src/css/',
            ext: '.css'
        }]
    }
};