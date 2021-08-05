const { src, dest, watch , parallel } = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');


const paths = {
    scss: 'src/scss/**/*.scss',
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./build/css') );
}

function watchArchivos() {
    watch( paths.scss, css );
}

exports.default=parallel(css, watchArchivos);