module.exports = function (grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        bootstrap_folder:'dev/component/bootstrap_get',
        sass: {
            dist: {
              options: {
                style: 'expanded'
              },
              files: {

              }
            }
          },
        less:{
            development:{
                options:{
                    compress:true,
                    cleancss:true,
                    optimization:2
                },
                files:{
                    "assets/css/app.min.css":[
                        "dev/component/less/global.less",
//                        "dev/component/bootstrap-jasny/less/bootstrap.less",
//                        "dev/component/swiper/dev/idangerous.swiper.css",
//                        "dev/component/pace/themes/pace-theme-flat-top.css",
                    ],
                }
            }
        },

        concat:{
            app:{
                src:['dev/component/modernizr/modernizr.full.js', 'dev/src/app/starter.js'],
                dest:'dev/src/app/starter-with-modernizr.js'
            },

            bootstrap:{
                src:[
                    '<%= bootstrap_folder %>/js/transition.js',
                    '<%= bootstrap_folder %>/js/alert.js',
                    '<%= bootstrap_folder %>/js/button.js',
                    '<%= bootstrap_folder %>/js/carousel.js',
                    '<%= bootstrap_folder %>/js/collapse.js',
                    '<%= bootstrap_folder %>/js/dropdown.js',
                    '<%= bootstrap_folder %>/js/modal.js',
                    '<%= bootstrap_folder %>/js/tooltip.js',
                    '<%= bootstrap_folder %>/js/popover.js',
                    '<%= bootstrap_folder %>/js/scrollspy.js',
                    '<%= bootstrap_folder %>/js/tab.js',
                    '<%= bootstrap_folder %>/js/affix.js',
                ],
                dest:'<%= bootstrap_folder %>/bootstrap.js'
            },
        },


        uglify:{
            pace:{files:{'assets/js/vendor/pace/pace.min.js':['dev/component/pace/pace.js']}},
            jquery:{files:{'assets/js/vendor/jquery/jquery.min.js':['dev/component/jquery/jquery.js']}},
            bootstrap:{files:{'assets/js/vendor/bootstrap/bootstrap.min.js':['<%= concat.bootstrap.dest %>']}},
            underscore:{files:{'assets/js/vendor/underscore/underscore.min.js':['dev/component/underscore/underscore.js']}},
            app:{files:{'assets/js/app/starter.min.js':['dev/src/app/starter-with-modernizr.js']}},
            backbone:{files:{'assets/js/vendor/backbone/backbone.min.js':['dev/component/backbone/backbone.js']}},
            marionette:{files:{'assets/js/vendor/backbone/marionette.min.js':['dev/component/backbone.marionette/lib/backbone.marionette.js']}},
            snap_svg:{files:{'assets/js/vendor/snap.svg/snapsvg.min.js':['dev/component/Snap.svg/dist/snap.svg.js']}},
            swiper:{files:{'assets/js/vendor/swiper/swiper.min.js':['dev/component/swiper/dist/idangerous.swiper-2.4.js']}},
            swiper_progress:{files:{'assets/js/vendor/swiper/swiper_progress.min.js':['dev/component/swiper/plugins/smooth-progress/idangerous.swiper.progress.js']}},
            switchery:{files:{'assets/js/vendor/switchery/switchery.min.js':['dev/component/switchery/dist/switchery.js']}},
//            mmenu:{files:{'assets/js/vendor/mmenu/src/js/jquery.mmenu.min.all.js':['dev/component/jQuery.mmenu/src/js/jquery.mmenu.min.all.js']}},
        },


        jshint:{
            options:{
                smarttabs:true
            }
        },

        watch:{
            options: {
                  livereload: true,
                },
            styles:{
                files:[
                    'dev/component/less/global.less',
                    'dev/component/less/*.less',
                    'dev/component/less/**/*.less',
                    'dev/component/**/**/*.less',
                ],
                tasks:[
                    'less',
                ],
                options:{
                    nospawn:true
                }
            },
            scripts:{
                files:[
                    'gruntfile.js',
                    'dev/src/**/*.js',
                    'dev/component/**/*.js',
                ],
                tasks:[
                    'concat',
                    'uglify',
//                    'less'
                ]
            }
        }

    });
//    grunt.loadNpmTasks('grunt-contrib-requirejs');
//    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-csso');
//    grunt.loadNpmTasks('grunt-jslint');
//    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
//        'sass',
        'concat',
        'less',
        'uglify',
//        'watch'
    ]);
};