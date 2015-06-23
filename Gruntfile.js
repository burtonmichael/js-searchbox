'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        handlebars: {
            compile: {
                options: {
                    namespace: false,
                    amd: 'handlebars.runtime'
                },
                files: {
                    'src/templates/app.tpl.js': 'src/app.hbs'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: './src/',
                    name: 'main',
                    out: 'tmp/requirejs.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
