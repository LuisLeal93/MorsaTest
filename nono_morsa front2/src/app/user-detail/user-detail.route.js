'use strict';

angular
    .module('app')
    .config(UserDetailRoutes);

UserDetailRoutes.$inject = ['$stateProvider'];

function UserDetailRoutes($stateProvider) {
    $stateProvider
        .state('user-detail', {
            url: '/usuarios/edit/:id?',
            parent: 'home',
            params: {},
            templateUrl: 'app/user-detail/views/user-detail.view.html',
            controller: 'UserDetailController',
            controllerAs: 'vm'
        });
}