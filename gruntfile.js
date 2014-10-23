/*global module:false*/
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect['static'](require('path').resolve(dir));
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: true
      },
      all: ['src/js/**/*.js']
    },

    bower: {
      install: {
        options: {
          targetDir: 'components'
        }
      }
    },

    connect: {
      options: {
        port:9000

      },
      server: {
        options: {
          port:9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        }
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, './src/')
            ];
          }
        }
      }
    },

    //Open default browser at the app
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    //setup watch tasks
    watch: {
      options: {
        nospan: true,
        livereload: LIVERELOAD_PORT
      },

      source: {
        files: ['./src/js/**/*.js'],
        tasks: ['jshint']
      },
      livereload:{
        options: {
          livereload:LIVERELOAD_PORT
        },
        files:[
          './src/js/**/*.js',
          './src/**/*.html',
          './src/css/**/*.css'
        ]
      }
    },
    buildGhPages: {
      ghPages: {
        // Leave empty if you just want to run the defaults
      }
    },
    esri_slurp: {
      options: {
        version: '3.11'
      },
      dev: {
        options: {
          beautify: true
        },
        dest: 'src/esri'
      },
      travis: {
        dest: 'src/esri'
      }
    },
    // clean the output directory before each build
    clean: ['dist'],
    // dojo build configuration, mainly taken from dojo boilerplate
    dojo: {
      dist: {
        options: {
          profile: 'profiles/app.profile.js' // Profile for build
        }
      },
      options: {
        dojo: 'src/dojo/dojo.js', // Path to dojo.js file in dojo source
        load: 'build', // Optional: Utility to bootstrap (Default: 'build')
        // profiles: [], // Optional: Array of Profiles for build
        // appConfigFile: '', // Optional: Config file for dojox/app
        // package: '', // Optional: Location to search package.json (Default: nothing)
        // packages: [], // Optional: Array of locations of package.json (Default: nothing)
        // require: '', // Optional: Module to require for the build (Default: nothing)
        // requires: [], // Optional: Array of modules to require for the build (Default: nothing)
        releaseDir: '../dist', // Optional: release dir rel to basePath (Default: 'release')
        cwd: './', // Directory to execute build within
        // dojoConfig: '', // Optional: Location of dojoConfig (Default: null),
        // Optional: Base Path to pass at the command line
        // Takes precedence over other basePaths
        // Default: null
        basePath: './src'
      }
    },
    // this copies over index.html and replaces
    // the perl regexp section of build.sh in the dojo boilerplate
    'string-replace': {
      index: {
        src: './src/index.html',
        dest: './dist/index.html',
        options: {
          replacements: [
            // remove isDeubug
            {
              pattern: /isDebug: *true,/,
              replacement: ''
            },
            // strip js comments
            {
              pattern: /\s+\/\/.*$/gm,
              replacement: ''
            },
            // replace newlines w/ whitespace
            {
              pattern: /\n/g,
              replacement: ' '
            },
            // strip html comments
            {
              pattern: /<!--[\s\S]*?-->/g,
              replacement: ''
            },
            // collapse whitespace
            {
              pattern: /\s+/g,
              replacement: ' '
            }
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-build-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', ['serve']);

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'jshint',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('hint', ['jshint']);

  grunt.registerTask('slurp', ['esri_slurp:dev']);

  grunt.registerTask('build', ['clean', 'dojo', 'string-replace']);

  grunt.registerTask('gh-pages', ['buildGhPages:ghPages']);
};
