var gulp = require("gulp");
var stylperjade = require("./index.js");
var css = require('./site.css');

gulp.task('default', function() {
    return gulp.src('site.css')
        //.pipe(stylperjade({
        //    css: ['site.css'],
        //    jade: ['layout.jade']
        //}))
        .pipe(stylperjade())
        .pipe(gulp.dest('./out'))
});