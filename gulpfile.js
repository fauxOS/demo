const gulp = require("gulp");
const rollup = require("gulp-better-rollup");
const resolve = require("rollup-plugin-node-resolve");
const babili = require("gulp-babili");
const download = require("gulp-download-stream");
const buffer = require("vinyl-buffer");

// Get the latest hterm-umd package, minify it, and store it
gulp.task("hterm", function() {
  return download({
    file: "hterm.min.js",
    url: "https://unpkg.com/hterm-umd"
  })
    .pipe(buffer())
    .pipe(babili())
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", function() {
  return gulp
    .src("src/main.js")
    .pipe(
      rollup({
        format: "es",
        sourceMap: false,
        plugins: [
          resolve({
            jsnext: true,
            browser: true
          })
        ]
      })
    )
    .pipe(babili())
    .pipe(gulp.dest("dist/"));
});
