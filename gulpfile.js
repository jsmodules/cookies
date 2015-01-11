var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    jshint = require("gulp-jshint"),
    karma = require("gulp-karma"),
    runSequence = require("run-sequence"),
    fs = require("fs"),
    size = require("gulp-size"),
    testFiles = ["src/cookies.js", "test/unit/**/*.spec.js"],
    paths = {src: p("src/**/*.js"), dist: p("dist")};

function p(path) {
    return __dirname + (path.charAt(0) === "/" ? "" : "/") + path;
}

gulp.task("uglify", function () {
    gulp.src(paths.src)
        .pipe(uglify())
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task("watch", function () {
    gulp.watch([paths.src, p("test/spec/**/*.js"), p("test/index.html")], ["uglify"]);
});

gulp.task("build", function() {
    return runSequence("test", ["image-min", "uglify"]);
});

gulp.task("hint:fail", function() {
    return gulp.src(__dirname + "/src/cookies.js")
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"))
        .pipe(jshint.reporter("fail"))
});

gulp.task("hint", function() {
    return gulp.src(__dirname + "/src/cookies.js")
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("test", ["hint:fail"], function() {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: "karma.conf.js",
            action: "run"
        }))
        .on("error", function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });

});

gulp.task("default", function() {
    gulp.watch(__dirname + "/src/js/**/*.js", ["hint", "uglify"]);
    gulp.src(testFiles)
        .pipe(karma({
            configFile: "karma.conf.js",
            action: "watch"
        }));
});
