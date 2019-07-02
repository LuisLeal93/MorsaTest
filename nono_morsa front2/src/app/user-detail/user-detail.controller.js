'use strict';

angular
    .module('app')
    .controller('UserDetailController', UserDetailController);

UserDetailController.$inject = ['$stateParams', 'UsersAPI', 'URL_SERVICIOS', '$timeout', '$window', '$rootScope', '$scope', '$log'];

// Obtencion de datos
function UserDetailController($stateParams, UsersAPI, URL_SERVICIOS, $timeout, $window, $rootScope, $scope, $log) {
    var vm = this;
    vm.isDisabled = true;

    $scope.submit = function(usuarios) {

        UsersAPI.editUserByID(JSON.stringify(usuarios)).$promise
            .then(function(users) {
                M.toast({ html: 'Información Actualizada', classes: 'rounded', timeRemaining: '50' });
            })
            .catch(function(err) {
                M.toast({ html: err.statusText, classes: 'rounded', timeRemaining: '50' });
            })
    }

    vm.fetchUser = function(userId) {
        if (!userId) {
            vm.isDisabled = false;
            vm.users = null;
            return;
        }
        UsersAPI.getUserByID({
                id: $stateParams.id
            }).$promise
            .then(function(users) {
                vm.users = users;
                M.updateTextFields()
            })
            .catch(function(err) {
                console.log(err);
            })

    };

    vm.fetchUser($stateParams.id);

}