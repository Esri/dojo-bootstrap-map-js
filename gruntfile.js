/*global module:false*/
var LIVERELOAD_PORT = 35729;
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: true
      },
      all: ['src/app/**/*.js']
    },

    connect: {
      options: {
        port:9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      // load cdn code w/ livereload
      cdn: {
        options: {
          base: 'src'
        }
      },
      // load built app
      build: {
        options: {
          base: 'dist'
        }
      }
    },

    //Open default browser at the app
    open: {
      cdn: {
        path: 'http://localhost:<%= connect.options.port %>/'
      },
      build: {
        path: 'http://localhost:<%= connect.options.port %>/'
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
    esri_slurp: {
      options: {
        version: '3.13'
      },
      dev: {
        options: {
          beautify: false
        },
        dest: 'src/esri'
      }
    },
    // clean the output directory before each build
    clean: {
      build: ['dist'],
      deploy: ['dist/**/*.consoleStripped.js','dist/**/*.uncompressed.js','dist/**/*.js.map'],
      bower: ['src/bootstrap-map-js', 'src/dijit', 'src/dojo', 'src/dgrid', 'src/dojo-bootstrap', 'src/dojox', 'src/put-selector', 'src/util', 'src/xstyle', 'src/spinjs'],
      slurp: ['src/esri']
    },
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
    processhtml: {
      build: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'src'
      },
      src: ['app/**', 'index.html']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-esri-slurp');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-dojo');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('default', ['serve']);

  grunt.registerTask('serve', function (target) {
    var trgt = target || 'cdn';
    grunt.task.run([
      'jshint',
      'connect:' + trgt,
      'open:' + trgt,
      'watch'
    ]);
  });

  grunt.registerTask('hint', ['jshint']);

  grunt.registerTask('slurp', ['clean:slurp', 'esri_slurp:dev']);

  grunt.registerTask('build', ['jshint', 'clean:build', 'dojo', 'processhtml']);

  grunt.registerTask('deploy', ['gh-pages']);
};
