module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
        gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:dev',  ['sass:app', 'copy:dev']);
    gtx.alias('build:dist', ['clean:dist', 'copy:dist', 'clean:dists', 'recess:min', 'concat:dist', 'uglify:dist']);

    gtx.alias('release', ['build:dist', 'bump-commit']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);
    
    gtx.alias('prerelease', ['bump-only:prerelease', 'release']);


    gtx.alias('js-app', ['jshint:app', 'concat:app']);
    gtx.alias('js-gui', ['jshint:gui', 'concat:gui']);
    gtx.alias('js-lib', ['jshint:lib', 'concat:lib']);
    gtx.alias('js', ['js-app', 'js-gui', 'js-lib']);

    gtx.alias('css-app', ['sass:app']);
    gtx.alias('css-fa', ['sass:fa']);
    gtx.alias('css', ['css-app', 'css-fa']);

    gtx.alias('default', ['js', 'css']);

    gtx.finalise();
};