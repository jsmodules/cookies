var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    size = require("gulp-size");

var p = function (path) {
    return __dirname + (path.charAt(0) === "/" ? "" : "/") + path;
};

var paths = {
    src: p("src/**/*.js"),
    dist: p("dist")
};


gulp.task("jshint", function() {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter("default"));
});

gulp.task("uglify", function () {
    gulp.src(paths.src)
        .pipe(uglify({outSourceMap: true}))
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest(paths.dist));

});

gulp.task("watch", function () {
    gulp.watch([paths.src], ["uglify"]);
});

gulp.task("build", ["uglify", "css-min"]);