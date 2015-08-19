/**
 * @author Sartre Brasil
 * @param grunt
 */
module.exports = function(grunt) {

    /*
     * Import dos plugins manualmente
     *
     * grunt.loadNpmTasks('grunt-contrib-connect');
     * grunt.loadNpmTasks('grunt-wiredep');
     * grunt.loadNpmTasks('grunt-contrib-jshint');
     * grunt.loadNpmTasks('grunt-contrib-sass');
     * grunt.loadNpmTasks('grunt-contrib-watch');
     */

    /*
     * matchdep realiza o import dos pluguins
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /*
     * configura o grunt
     */
    grunt.initConfig({
        //tarefas grunt aqui

        //tarefa grunt-wiredep
        wiredep: {
            target: {
                src: 'index.html'
            }
        },

        //tarefa grunt-contrib-watch
        watch: {
            options: {
                livereload: true
            },

            //sub-tarefas do watch
            arquivosweb: {
                files: ['app/**/*.js','**/*.html','app/**/*.css']
            },

            //sub-tarefa
            fazer_wiredep: {
                files: ['bower.json'],
                tasks: ['wiredep'] //executa a tarefa wiredep linha 29
            }
        },

        //tarefa grunt-contrib-copy
        copy: {
            indexs: {
                files: [
                    {
                        expand: true,
                        src: ['*.html', 'app/**'],
                        dest: 'build/'
                    }
                ]
            }
        },

        //tarefa grunt-contrib-concat
        concat: {
            principal: {
                src: ['app/js/app-config.js', 'app/js/app-config-bootstrap.js' /*'app/!**!/!*-service.js'*/],
                dest: 'build/js/principal.js'
            }
        },

        //tarefa grunt-contrib-clean
        clean: {
            build: {
                src: ['build']
            }
        },

        //tarefa ngAnnotate
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },

        //tarefa grunt-contrib-uglify
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },

        //tarefa grunt-contrib-cssmin
        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.css']
                    }
                ]
            }
        },

        //tarefa grunt-contrib-htmlmin
        htmlmin: {
            build: {
                options: {
                    removeComment: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.html']
                    }
                ]
            }
        }

    });

    grunt.registerTask( 'build', ['clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin']);
};