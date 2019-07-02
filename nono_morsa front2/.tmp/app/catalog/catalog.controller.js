'use strict';

angular.module('app').filter('toTrusted', toTrusted);
toTrusted.$inject = ['$sce'];

function toTrusted($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}

angular
    .module('app')
    .controller('CatalogController', CatalogController);

CatalogController.$inject = ['$stateParams', 'UsersAPI', '$location', '$state', '$scope', '$rootScope', '$timeout', '$anchorScroll', '$log', '$interval'];

function CatalogController($stateParams, UsersAPI, $location, $state, $scope, $rootScope, $timeout, $anchorScroll, $log, $inteval) {
    var vm = this;

    // Metodos Catalogo
    vm.onSelectUser = function(userId, accion) {
        if (accion === "delete") {
            UsersAPI.removeUser({ id: userId }).$promise
                .then(function(data) {
                    M.toast({ html: 'Usuario Eliminado', classes: 'rounded', timeRemaining: '800' });
                    vm.AllUsers = vm.AllUsers.filter(function(item) { return item.id !== userId });
                })
                .catch(function(err) {
                    console.log(err);
                })
        } else if (accion === "update") {
            vm.fetchUserById(userId)
        }
    };


    vm.onCreateUser = function() {
        $state.go('new-user-detail');
    }

    vm.getAllUsers = function() {
        UsersAPI.getAllUsers().$promise
            .then(function(data) {
                vm.AllUsers = data;
            })
            .catch(function(err) {
                console.log(err);
            })
    }
    vm.getAllUsers();


    // Metodos Detalle Usuario
    vm.fetchUserById = function(userId) {
        UsersAPI.getUserByID({
                id: userId
            }).$promise
            .then(function(users) {
                $state.go('user-detail', { 'id': userId });
            })
            .catch(function(err) {
                if (err.status) {
                    if (err.status === 404) {
                        M.toast({ html: 'El Usuario ya no existe', classes: 'rounded', timeRemaining: '1200' });
                        //Materialize.toast('El Usuario ya no existe', 1200, 'rounded')
                        vm.AllUsers = vm.AllUsers.filter(function(item) { return item.id !== userId });
                    }
                } else {
                    M.toast({ html: 'Ocurrio un error inesperado', classes: 'rounded', timeRemaining: '800' });
                    //Materialize.toast('Ocurrio un error inesperado', 800, 'rounded')
                }
            })
    };
}