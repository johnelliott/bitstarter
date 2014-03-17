// my grunt file
// http://gruntjs.com/getting-started

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // config less command
    less: {
      development: { // this is a target ?!
        options: {
          paths: ["less"] // this is an option called paths
        },
        files: {
          "css/theme.css": "less/main.less"
        }
      }
    },

    // config watch command 
    watch: {
      files: ['less/*.less'],
      tasks: ['less']
    }    
  });

  // // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the less, watch, and cssmin tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['less']); // this specifies less as one of the default tasks

};
