'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                cwd: 'src/fonts',
                src: '*',
                dest: 'dist/fonts',
                filter: 'isFile'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './dist/css/base.css': './src/css/base.scss'
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
                        'moment': 'libs/moment/min/moment.min',
                        'handlebars.runtime': 'libs/handlebars/handlebars.runtime.amd.min',
                        'pikaday': 'libs/pikaday/pikaday',
                        'template': 'templates/compiled/app.tpl'
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
                files: ['src/**/*.js', 'src/**/*.scss', 'src/**/*.hbs'],
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
        },
        jshint: {
            files: ['src/main.js'],
            options: {
                globals: {
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['jshint', 'clean', 'handlebars', 'requirejs', 'sass', 'copy', 'watch']);
    grunt.registerTask('watcher', ['jshint', 'clean', 'handlebars', 'requirejs', 'sass', 'copy']);
}
