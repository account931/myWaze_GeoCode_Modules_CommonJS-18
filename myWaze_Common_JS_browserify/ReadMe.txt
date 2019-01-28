Updated version 
1. Js rewritten with CommonJS Modules, packed by Browserify + Watchify
2. CSS animation rotate
3.App uses 1 script - dist/js/bundle.js, which contains all scripts, packed by Browserify

============================================================================
CLI Commands
npm init  -> to create package.json
npm install -> if u have package.json with dependencies and no {node-modules} folder yet.

===============================================
Commands
1. browserify js/geo_mapbox_core.js -o dist/js/bundle_js.js -d      =>  creates js bundle (if u use browserify standalone, u 'll have to recreate it manually after any changes in script)
   
2. npm run watch-js  = >  watches changes without rebuild

============================================================================
add to packagist.json

 "scripts": {
   
    "build-js": "browserify js/geo_mapbox_core.js > js/bundle_js.js",
    "watch-js": "watchify js/geo_mapbox_core.js -o js/bundle_js.js"
  },
 "devDependencies": {
    "browserify": "latest",
    "watchify": "latest"
  }

================================================================================
Installing
npm install -g browserify
npm install gulp -g          => install globally
npm install gulp --save-dev  => add to package.json dependencies


npm i browser-sync --save-dev
npm i --save-dev gulp-concat gulp-uglifyjs
npm i --save-dev vinyl-buffer

===============================================================================
watchify.js install-> add to package.json + npm install (we need if we use browserify standalone, without Gulp)





gulp taskname -> run gulp

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});
