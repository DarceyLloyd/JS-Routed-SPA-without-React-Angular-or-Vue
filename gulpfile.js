const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SASS/SCSS > CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const buildCssDev = function(done) {
    return gulp
        .src("./scss/*.scss")
        .pipe(sass({
            outputStyle: "expanded", // compressed, nested, compact, and expanded
        }))
        .on("error", sass.logError)
        .pipe(gulp.dest("./dist/includes/css/"));
    // done();
}
// exports.buildCssDev = buildCssDev;
gulp.task("buildCssDev", gulp.series(buildCssDev));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


const buildCssProd = function(done) {
    return gulp
        .src("./scss/*.scss")
        .pipe(sass({
            outputStyle: "compressed", // compressed, nested, compact, and expanded
        }))
        .on("error", sass.logError)
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./dist/includes/css/"));
    // done();
}
// exports.buildCssProd = buildCssProd;
gulp.task("buildCssProd", gulp.series(buildCssProd));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


gulp.task("buildCss", gulp.parallel(buildCssDev,buildCssProd));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






gulp.task("watch", function(){
    gulp.watch([
        "./scss/**/*.scss"
    ], gulp.series(buildCssDev,buildCssProd));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





gulp.task("build", gulp.parallel(
    buildCssDev,buildCssProd
));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





