var gulp = require("gulp"),
    uglify = require("gulp-uglifyjs"),
    jshint = require("gulp-jshint"),
    stylish = require("jshint-stylish"),
    size = require("gulp-size"),
    _ = require("lodash"),
    karma = require("karma").server;

var p = function (path) {
    return __dirname + (path.charAt(0) === "/" ? "" : "/") + path;
};

var paths = {
    src: p("src/**/*.js"),
    dist: p("dist")
};

var karmaFiles = [
    p("dist/cookies.js"),
    p("test/spec/**/*.js")
];

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task("tdd", function (done) {

    var karmaTddConf = {
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        files: karmaFiles
    };

    karma.start(karmaTddConf, done);

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
        .pipe(gulp.dest(paths.dist));

});

gulp.task("watch", function () {
    gulp.watch([paths.src, p("test/spec/**/*.js"), p("test/index.html")], ["uglify"]);
});

gulp.task("build", ["uglify"]);

/**
 * Run test once and exit
 */
gulp.task("test", ["jshint"], function (done) {

    var karmaTestConf = {
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        files: karmaFiles
    };

    karma.start(_.assign({}, karmaTestConf, {singleRun: true}), done);

});

gulp.task("default", ["build", "tdd", "watch"]);
