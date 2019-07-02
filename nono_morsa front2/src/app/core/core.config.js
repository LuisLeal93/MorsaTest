'use strict';

angular
  .module('app')
  .config(CoreConfig);

CoreConfig.$inject = ['$httpProvider'];

function CoreConfig($httpProvider) {
  $httpProvider.interceptors.push('RequestsInterceptor');
}
