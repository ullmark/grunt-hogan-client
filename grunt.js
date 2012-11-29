module.exports = function(grunt) {

  "use strict";

  // Project configuration.
  grunt.initConfig({

    hoganclient: {
      // defining a tmpl
      namespaced: {
        options: {
          variable: 'foo.tmpl'
        },
        src: ['test/templates/**/*.hogan'],
        dest: 'test/tmp/foo.js'
      },
      // not defining any variable name
      global: {
        src: ['test/templates/**/*.hogan'],
        dest: 'test/tmp/bar.js'
      },
      // wrapping the temnplates in custom code.
      wrapping: {
        options: {
          wrap: {
            start: 'head.ready(function(){',
            end: '});'
          }
        },
        src: ['test/templates/wrap.mustache'],
        dest: 'test/tmp/wrapping.js'
      }
    },

    test: {
      files: ['test/hogan-client_test.js']
    },

    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/hogan-client_test.js']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {
        Hogan: true,
        foo: true,
        window: true
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bump');

  // Default task.
  grunt.registerTask('default', 'lint hoganclient test');

};
