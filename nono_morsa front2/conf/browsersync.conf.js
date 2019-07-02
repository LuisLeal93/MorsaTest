const conf = require('./gulp.conf');
var proxyMiddleware = require('http-proxy-middleware');

console.log('Develop proxy:');
console.log('------------------------------------------------------------------');

module.exports = function() {
    return {
        ghostMode: false,
        localOnly: true,
        notify: false,
        ui: false,
        server: {
            baseDir: [
                conf.paths.tmp,
                conf.paths.src
            ],
            routes: {
                '/bower_components': 'bower_components'
            },
            middleware: []
        },
        open: false,
        port: 4000
    };
};