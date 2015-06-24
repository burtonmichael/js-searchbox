'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: false,
                    amd: ['handlebars.runtime']
                },
                files: {
                    'src/templates/compiled/app.tpl.js': 'src/templates/*.hbs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
}
