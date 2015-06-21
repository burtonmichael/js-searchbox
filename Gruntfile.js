'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: false,
                    amd: true
                },
                files: {
                    'src/templates/app.tpl.js': 'src/app.hbs'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
}
