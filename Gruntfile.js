var browserSync = require("browser-sync");

module.exports = function (grunt) {
    
       // some other grunt tasks

        watch: {
			options: {
				cwd: '/',
				spawn: false    // This is very important
			},
			files: ['html/**/*.html', 'scss/**/*.scss','js/**/*.js'],
			tasks: ['other-task-1', 'other-task-2', 'bs-inject']
		}
    });
    
    
    // Init BrowserSync manually
    grunt.registerTask("bs-init", function () {
        var done = this.async();
        browserSync({
            open: "ui",
	        logLevel:'debug',
	        timestamps: false,
	        server: {
	          	baseDir: "html"
	        }
        }, function (err, bs) {
            done();
        });
    });
    
    // Inject CSS files to the browser
    grunt.registerTask("bs-inject", function () {
        browserSync.reload(["app.css", "some-other-file.css"]);
    });
    
    // Launch Browser-sync & watch files
    grunt.registerTask('watcher', ['bs-init', 'watch']);
};