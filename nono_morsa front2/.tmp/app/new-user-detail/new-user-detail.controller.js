'use strict';

angular
    .module('app')
    .controller('NewUserDetailController', NewUserDetailController);

NewUserDetailController.$inject = ['$stateParams', 'UsersAPI', 'URL_SERVICIOS', '$timeout', '$window', '$rootScope', '$scope', '$log', '$state'];

// Obtencion de datos
function NewUserDetailController($stateParams, UsersAPI, URL_SERVICIOS, $timeout, $window, $rootScope, $scope, $log, $state) {
    var vm = this;

    $scope.submit = function(user) {

            let nickDisponible = false;


            UsersAPI.findOne({
                    filter: {
                        where: {
                            nickname: user.nickname
                        }
                        // ,limit: 0
                    }
                }).$promise
                .then(function(result) {
                    if (result.length > 0) {
                        M.toast({ html: 'Nickname no disponible', classes: 'rounded', timeRemaining: '50' });
                        nickDisponible = false;
                    } else {
                        nickDisponible = true;
                    }
                })
                .catch(function(err) {
                    console.log(err);
                    nickDisponible = false;
                }).finally(function() {
                    if (nickDisponible === true) {
                        UsersAPI.newUser(JSON.stringify(user)).$promise
                            .then(function(response) {
                                M.toast({ html: 'Usuario registrado', classes: 'rounded', timeRemaining: '50' });
                                $state.go('catalog')
                            })
                            .catch(function(err) {
                                M.toast({ html: err.statusText, classes: 'rounded', timeRemaining: '50' });
                            })
                    };
                });

        } // end submit

}