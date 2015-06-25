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
                    "jquery": "libs/jquery/src/core",
                    'moment': 'libs/moment/min/moment.min',
                    'handlebars.runtime': 'libs/handlebars/handlebars.runtime.amd.min',
                    'jquery-cascading-dropdown': 'libs/jquery-cascading-dropdown/jquery.cascadingdropdown.min',
                    'pikaday': 'libs/pikaday/pikaday',
                    'template': 'templates/compiled/app.tpl',
                    'translations': 'js/data/translations/es'
                },
                shim: {
                    'pikaday': {
                        deps: ['moment']
                    },
                    'jquery.cascadingdropdown.min': {
                        deps: ['jquery']
                    }
                },
                map: {
                    'jquery': 'libs/jquery/src'
                },
                optimizeCss: 'default'
            }
        }
    });

    grunt.loadNpmTasks("grunt-jquery-builder");
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
