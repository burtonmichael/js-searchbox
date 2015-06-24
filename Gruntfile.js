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
        },
        requirejs: {
            options: {
                baseUrl: "./src",
                dir: "./dist",
                name: "main",
                paths: {
                    'moment': '../bower_components/moment/min/moment.min',
                    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd.min',
                    'pikaday': '../bower_components/pikaday/pikaday',
                    'template': 'templates/compiled/app.tpl',
                    'translations': 'js/data/translations/es'
                },
                shim: {
                    'pikaday': {
                        deps: ['moment']
                    }
                },
                optimizeCss: 'default'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
