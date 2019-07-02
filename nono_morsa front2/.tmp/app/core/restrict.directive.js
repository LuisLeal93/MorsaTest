'use strict';

angular
    .module('app')
    .directive('restrict', restrict);

restrict.$inject = ['$parse'];

function restrict($parse) {
    var inputTypes = {
        textNumber: '[^A-Za-z0-9 ñÑáéíóúÁÉÍÓÚ]',
        text: '[^A-Za-z _-ñÑáéíóúÁÉÍÓÚ]',
        number: '[^0-9]',
        email: '[^A-Za-z.@]',
        basicTextNumber: '[^A-Za-z0-9_-]'
    };

    var link = function($scope, $element, $attrs) {
        var exp = inputTypes[$attrs.restrict] || $attrs.restrict;
        $scope.$watch($attrs.ngModel, function(value) {
            if (!value) {
                return;
            }
            if (typeof value === 'number') { // eslint-disable-line
                value = String(value);
            }
            $parse($attrs.ngModel).assign($scope, value.replace(new RegExp(exp, 'g'), ''));
        });
    };

    return {
        restrict: 'A',
        require: 'ngModel',
        link: link
    };
}