module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: "src/tpl/",
          src: [
              "*.html",
              "**/*.html"
          ],
          dest: "www/tpl/",
          ext: ".html",
          extDot: "first"
      }]
  }
};