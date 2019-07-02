'use strict';

angular
    .module('app')
    .directive('uniqueUsername', uniqueUsername);

uniqueUsername.$inject = ['UsersAPI'];


function uniqueUsername() {

    function link($scope, $element, $attrs, $ctrl) {

        // $scope.$watch($attrs.ngModel, function(value) {
        //     console.log($attrs.ngModel);
        //     console.log(value);

        // });

        $element.on('blur', function() {

            console.log('Que onda');


            value = $attrs.ngModel

            UsersAPI.findOne(value)
                .then(function(data) {
                    $ctrl.$setValidity('unique', notEmpty(data));
                })
                .catch(function() {
                    $ctrl.$setValidity('unique', false);
                });

            // if (value.length == 0) {
            //     $scope.$apply();
            // }
        });

        // $element.bind('blur', function() {

        //     UsersAPI.findOne(value)
        //         .then(function(data) {
        //             $ctrl.$setValidity('unique', notEmpty(data));
        //         })
        //         .catch(function() {
        //             $ctrl.$setValidity('unique', false);
        //         });
        // });

        // $scope.$watch($attrs.ngModel, function(value) {

        //     console.log($attrs.ngModel);
        //     console.log(value);

        //     if (!value) {
        //         return;
        //     }

        //     UsersAPI.findOne(value)
        //         .then(function(data) {
        //             $ctrl.$setValidity('unique', notEmpty(data));
        //         })
        //         .catch(function() {
        //             $ctrl.$setValidity('unique', false);
        //         });
        // });

    };


    return {
        restrict: 'A',
        require: 'ngModel',
        link: link
    };

};