module.exports = {
	min: {
        files: {
            "www/css/app.min.css": [
                "src/css/bootstrap.css",
                "src/css/*.css"
            ]
        },
        options: {
            compress: true
        }
    }
};