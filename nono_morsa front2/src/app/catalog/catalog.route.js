'use strict';

angular
    .module('app')
    .config(CatalogRoutes);

CatalogRoutes.$inject = ['$stateProvider'];

function CatalogRoutes($stateProvider) {
    $stateProvider
        .state('catalog', {
            url: '/catalogo',
            parent: 'home',
            templateUrl: 'app/catalog/views/catalog.client.view.html',
            controller: 'CatalogController',
            controllerAs: 'vm'
        });
}