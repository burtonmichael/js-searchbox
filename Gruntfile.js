'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './src/css/base.css': './src/css/base.scss'
                }
            }
        },
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
            build: {
                options: {
                    baseUrl: "./src/",
                    out: "./dist/app.js",
                    name: "../node_modules/almond/almond",
                    include: "main",
                    wrap: true,
                    paths: {
                        "jquery": "js/jquery/jquery.min",
                        'moment': 'libs/moment/min/moment.min',
                        'handlebars.runtime': 'libs/handlebars/handlebars.runtime.amd.min',
                        'pikaday': 'libs/pikaday/pikaday',
                        'template': 'templates/compiled/app.tpl',
                        'cssLoader': 'js/cssLoader'
                    },
                    shim: {
                        'pikaday': {
                            deps: ['moment']
                        },
                        'jquery.cascadingdropdown.min': {
                            deps: ['jquery']
                        }
                    },
                    preserveLicenseComments: false
                }
            }
        },
        watch: {
            build: {
                files: ['src/**/*.js'],
                tasks: ['watcher'],
                options: {
                    spawn: false,
                },
            }
        },
        clean: {
            build: {
                src: 'dist'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['clean', 'handlebars', 'requirejs', 'sass', 'watch'])
    grunt.registerTask('watcher', ['clean', 'requirejs'])
}
