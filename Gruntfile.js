module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    bump: {
      options: {
        pushTo: 'origin'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coverage/blanket'
        },
        src: ['test/**/*.js']
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'coverage/coverage.html'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {
      test: {
        files: ['test/**/*.js', 'lib/**/*.js'],
        tasks: ['mochaTest:test']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

  /**
   * We only want to run tests at this point, not coverage
   */
  grunt.registerTask('test', ['watch:test']);

};
