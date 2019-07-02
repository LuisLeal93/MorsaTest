'use strict';

angular
  .module('app')
  .config(CoreRoutes);

CoreRoutes.$inject = ['$stateProvider'];

function CoreRoutes($stateProvider) {
  $stateProvider
  .state('home', {
    templateUrl: 'app/core/views/home.view.html'
  });
}
