module.exports = function( grunt ) {
    grunt.initConfig({        
        pkg: grunt.file.readJSON( 'package.json' ),

        emberTemplates: {
            options: {
                templateName: function( sourceFile ) {
                    return sourceFile.replace( /assets\/templates\//, '' );
                }
            },

            'public/libs/templates.js': [ "assets/templates/**/*.hbs" ]
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },

            files: {
                src: [ 'server/**/*.js', 'public/js/**/*.js' ],

                gruntfile: [ 'Gruntfile.js' ],

                packagefile: [ 'package.json' ],
            }
        },

        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: [ 'jshint' ]
            },

            source: {
                files: [ '<%= jshint.files.src %>' ],
                tasks: [ 'jshint' ]
            },

            style: {
                files: [ 'assets/styles/*.less' ],
                tasks: [ 'less' ]
            },

            templates: {
                files: [ 'assets/templates/**/*.hbs' ],
                tasks: [ 'emberTemplates' ]
            }
        },

        less: {
            development: {
                options: {
                    paths: [ 'assets/styles' ]
                },
                
                files: {
                    'public/css/app.css': 'assets/styles/app.less'
                }
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-ember-templates' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );

    grunt.registerTask( 'default', [ 'jshint', 'emberTemplates', 'less' ] );
};
