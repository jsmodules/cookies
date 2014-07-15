var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    size = require("gulp-size"),
    jasmine = require("gulp-jasmine"),
    connect = require("gulp-connect"),
    gulpOpen = require("gulp-open"),
    p = function (path) {
        return __dirname + (path.charAt(0) === "/" ? "" : "/") + path;
    },
    paths = {
        src: p("src/**/*.js"),
        dist: p("dist")
    };

gulp.task("test", ["jshint"], function () {
    gulp.src(p("test/spec/test.js"))
        .pipe(jasmine());

});

gulp.task("connect", function () {
    connect.server({
        root: p(""),
        port: 8000,
        livereload: true
    });
});

gulp.task("serve", ["connect"], function () {
    gulp.src(p("test/index.html"))
        .pipe(gulpOpen("", {url: "http://localhost:8000/test/index.html"}));
});

gulp.task("jshint", function () {
    return gulp.src(paths.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter("default"));
});

gulp.task("uglify", function () {
    gulp.src(paths.src)
        .pipe(uglify({outSourceMap: true}))
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());

});


gulp.task("watch", function () {
    gulp.watch([paths.src, p("test/spec/**/*.js"), p("test/index.html")], ["uglify"]);
});

gulp.task("build", ["uglify"]);

gulp.task("default", ["build", "watch", "serve"]);
