module.exports = function (grunt) {

    // Project configuration.

//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//            },
//            build: {
//                src: 'src/<%= pkg.name %>.js',
//                dest: 'build/<%= pkg.name %>.min.js'
//            }
//        }
//    });


    grunt.initConfig({
        bower: {
            target: {
                rjsConfig: './build.js',
                options: {
                    baseUrl: '.'
                }
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'js',
                    runBower: false
                },
                files: {
                    'imagesloaded/imagesloaded.js': 'imagesloaded/imagesloaded.js'
                },
                folders: {
                    files: {
                        'bootstrap': 'bootstrap/dist'
                    }
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "../",
                    mainConfigFile: "./build.js",
                    dir: "dist",
                    appDir: "js",
                    preserveLicenseComments: false,
                    useStrict: true,

                    modules: [

                    ]
                }
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['bower', 'bowercopy', 'requirejs']);

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);

};