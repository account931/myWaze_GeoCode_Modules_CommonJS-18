Updated version 
1. Js rewritten with CommonJS Modules, packed by Browserify + Watchify
2. CSS animation rotate

============================================================================
Commands
# browserify js/geo_mapbox_core.js -o js/bundle_js.js -d      =>  creates js bundle
   
# npm run watch-js  = >  watches changes without rebuild

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
