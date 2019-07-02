'use strict';

angular
    .module('app')
    .config(NewUserDetailRoutes);

NewUserDetailRoutes.$inject = ['$stateProvider'];

function NewUserDetailRoutes($stateProvider) {
    $stateProvider
        .state('new-user-detail', {
            url: '/usuarios/new',
            parent: 'home',
            params: {},
            templateUrl: 'app/new-user-detail/views/new-user-detail.view.html',
            controller: 'NewUserDetailController',
            controllerAs: 'vm'
        });
}