/**
 * Created by Navid on 2/11/2017 AD.
 */
const browserSync = require( 'browser-sync' )

browserSync(
    {
       server: {
          baseDir: './',
          index: 'index.html'
       },
       files: [ './dist/*.js', 'index.html' ]
    }
)
