
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/app.css': 'lib/greenfields.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass']);

};