var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");
gulp.task("dev", function() {
    return gulp.src("../css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('../css'))
})
gulp.task("watch", function() {
    gulp.watch("../css/*.scss", gulp.series('dev'));
})
gulp.task("server", function() {
    return gulp.src("../")
        .pipe(server({
            port: 3030,
            open: true,
            livereload: true

        }))
})
gulp.task("def", gulp.series('dev', "server", "watch"));