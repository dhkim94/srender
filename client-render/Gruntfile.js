module.exports = function(grunt) {
    var pData = grunt.file.readJSON("preprocess.json");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: {
                src: [
                    "tmp",
                    "public",
                    "src/less"
                ]
            }
        },
        preprocess: {
            index: {
                src: 'index.html',
                cwd: 'assets',
                dest: 'tmp/html.preprocess',
                expand: true,
                options: {context: pData}
            },
            less: {
                src: 'less/{,*/}*.less',
                cwd: 'assets',
                dest: 'src',
                expand: true,
                options: {context: pData}
            }
        },
        // less: {
        //     dist: {
        //         options: {
        //             paths: ['less']
        //         },
        //         files: {
        //             'less/tmp/css/core.css': 'less/tmp/less.preprocess/core.less'
        //         }
        //     }
        // },
        // cssmin: {
        //     options: {
        //         shorthandCompacting: true,
        //         roundingPrecision: -1,
        //         sourceMap: true
        //     },
        //     dist: {
        //         files: {
        //             'public/appgallery/css/core.min.css': [
        //                 'less/css/ie10-bug-fixed/ie10-viewport-bug-workaround.css',
        //                 'less/tmp/css/core.css'
        //             ]
        //         }
        //     }
        // },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                // 단일 파일
                files: {
                   'public/index.html': 'tmp/html.preprocess/index.html'
                },
                // n개의 파일
                // files: [
                //     {'src/dist/html/index.htm': 'src/html/index.htm'},
                //     {
                //         expand: true,
                //         cwd: 'src/html',
                //         src: '{,*/}{,*/}*.html',
                //         dest: 'src/dist/html'
                //     }
                // ]
            }
        },
        // copy: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: "public/js",
        //             src: ["nif.js"],
        //             dest: "../dev-mode/public/dm/js"
        //         }]
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-preprocess');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // grunt.registerTask("default", ["clean", "preprocess", "less", "cssmin", "htmlmin"]);
    grunt.registerTask("default", ["clean", "preprocess", "htmlmin"]);
};