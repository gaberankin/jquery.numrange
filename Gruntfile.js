module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> -  <%= pkg.author %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				comments: 'some'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		copy: {
			build: {
				expand: true, 
				flatten: true,
				src: 'src/*',
				dest: 'build/'
			}
		},
		watch: {
			build: {
				files: 'src/*.js',
				tasks: ['uglify','copy'],
				options: {
					interrupt: true,
				},
			},
		},
	});
	grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['uglify','copy']);

};