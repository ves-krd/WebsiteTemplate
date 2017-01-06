'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("mm-dd-yyyy") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' */\n',
    jshint: {
      options: {
        latedef: false,
        sub:     true,
        node:    true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/*.js']
      }
    },

    watch: {
      js: {
        files: 'js/*',
        tasks: ['newer:jshint:src']
      },
      html: {
        files: '*.html'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '*.html',
            'css/*.css',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  
  // Watches all necessary files in src, refreshes CSS on change, reloads HTML/JS on change, jslint on JS changes
  grunt.registerTask('run', ['browserSync', 'watch'])
};