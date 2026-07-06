'use strict';

// Modernized build for the Gator Enterprise site.
//
// Source lives in `app/`; the complete, deployable site is built into `dist/`.
// Toolchain: gulp 5 + Dart Sass + PostCSS (autoprefixer/cssnano) for styles,
// esbuild for per-page script bundles, sw-precache for the service worker.
// Plain CommonJS so no Babel/transpile step is needed to run this file.

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const esbuild = require('esbuild');
const browserSync = require('browser-sync').create();
const swPrecache = require('sw-precache');
const pkg = require('./package.json');

// Per-page entry bundles. Each imports only local ./lib/* modules; jQuery,
// contentful, marked, Vue and FB are runtime globals loaded from a CDN.
const SCRIPT_ENTRIES = [
  'app/scripts/contact-page.js',
  'app/scripts/engine-page.js',
  'app/scripts/golf-cart-page.js',
  'app/scripts/home-page.js',
  'app/scripts/marine-page.js',
  'app/scripts/services-page.js',
];

function reload(done) {
  browserSync.reload();
  done();
}

// Wipe build output. dist/ is gitignored build output, so nothing to preserve.
function clean() {
  return Promise.all([
    fs.promises.rm('dist', {recursive: true, force: true}),
    fs.promises.rm('.tmp', {recursive: true, force: true}),
  ]);
}

// Compile Sass -> CSS, autoprefix, and minify. Sass skips _partials, so only
// gator.scss and engine-quote-tool-style.scss produce output.
function styles() {
  return gulp.src(['app/styles/**/*.scss', 'app/styles/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass({precision: 10}).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(gulp.dest('dist/styles'));
}

function bundleScripts(outdir) {
  return esbuild.build({
    entryPoints: SCRIPT_ENTRIES,
    outdir,
    bundle: true,
    format: 'iife',
    target: ['es2015'],
    sourcemap: true,
    minify: true,
    logLevel: 'warning',
  });
}

// Bundle the page scripts and provide the local jQuery fallback that every
// page references via document.write when the CDN is unreachable.
async function scripts() {
  await fs.promises.mkdir('dist/scripts', {recursive: true});
  await fs.promises.mkdir('.tmp/scripts', {recursive: true});
  await Promise.all([
    fs.promises.copyFile('node_modules/jquery/dist/jquery.min.js', 'dist/scripts/jquery.min.js'),
    fs.promises.copyFile('node_modules/jquery/dist/jquery.min.js', '.tmp/scripts/jquery.min.js'),
    bundleScripts('dist/scripts'),
    bundleScripts('.tmp/scripts'),
  ]);
}

// Minify the hand-authored HTML pages.
function html() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true,
    }))
    .pipe(gulp.dest('dist'));
}

// encoding:false keeps binary files byte-exact under gulp 5.
function images() {
  return gulp.src('app/images/**/*', {encoding: false})
    .pipe(gulp.dest('dist/images'));
}

// Copy root-level assets (favicon, manifests, robots/humans, CNAME, etc.).
// HTML is handled by html(); .htaccess is intentionally dropped (no-op on Pages).
function copy() {
  return gulp.src(['app/*', '!app/*.html', '!app/.DS_Store'], {dot: true, encoding: false})
    .pipe(gulp.dest('dist'));
}

function copyNewsletters() {
  return gulp.src('app/newsletters/*.pdf', {encoding: false})
    .pipe(gulp.dest('dist/newsletters'));
}

function copySwScripts() {
  return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', 'app/scripts/sw/runtime-caching.js'])
    .pipe(gulp.dest('dist/scripts/sw'));
}

function generateServiceWorker() {
  const rootDir = 'dist';
  return swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    cacheId: pkg.name || 'gator-enterprise',
    importScripts: ['scripts/sw/sw-toolbox.js', 'scripts/sw/runtime-caching.js'],
    staticFileGlobs: [
      `${rootDir}/images/**/*`,
      `${rootDir}/scripts/**/*.js`,
      `${rootDir}/styles/**/*.css`,
      `${rootDir}/*.{html,json}`,
    ],
    stripPrefix: rootDir + '/',
  });
}

const serviceWorker = gulp.series(copySwScripts, generateServiceWorker);

// Full production build into dist/.
const build = gulp.series(
  clean,
  styles,
  gulp.parallel(html, scripts, images, copy, copyNewsletters),
  serviceWorker
);

// Dev server with live reload (serves compiled assets from .tmp + sources from app).
function serveDev() {
  browserSync.init({
    notify: false,
    logPrefix: 'WSK',
    scrollElementMapping: ['main', '.mdl-layout'],
    server: ['.tmp', 'app'],
    port: 4000,
  });
  gulp.watch('app/**/*.html', reload);
  gulp.watch('app/styles/**/*.{scss,css}', gulp.series(styles, reload));
  gulp.watch('app/scripts/**/*.js', gulp.series(scripts, reload));
  gulp.watch('app/images/**/*', reload);
}

function serveDistServer() {
  browserSync.init({
    notify: false,
    logPrefix: 'WSK',
    scrollElementMapping: ['main', '.mdl-layout'],
    server: 'dist',
    port: 3001,
  });
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.images = images;
exports.build = build;
exports.serve = gulp.series(gulp.parallel(scripts, styles), serveDev);
exports['serve:dist'] = gulp.series(build, serveDistServer);
exports.default = build;
