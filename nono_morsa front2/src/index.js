angular
    .module('app', [
        'ui.router',
        'ngResource',
        'ui.materialize',
        'LocalStorageModule',
        'ngclipboard',
        'angular-owl-carousel-directive'
    ]);

var config = {
    development: {
        URL_SERVICIOS: 'http://localhost:3000/api'
    }
};

var devDomains = ['localhost', '0.0.0.0'];
/* eslint-disable */
var isDevEnvironment = devDomains.indexOf(document.location.hostname) !== -1;
/* eslint-enable */

var environment = 'development';
angular
    .module('app')
    .constant('URL_SERVICIOS', config[environment].URL_SERVICIOS);