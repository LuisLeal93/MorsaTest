 'use strict';

 angular
     .module('app')
     .directive('valminimo', valminimo);

 function valminimo() {

     function link($scope, $element, $attrs, $ctrl) {
         var minlength = parseInt($attrs.valminimo);

         // Metodo no funciona, corre antes que restrict
         //  $ctrl.$parsers.unshift(function(value) {
         //      value = value || '';

         //      var valid = value.length >= minlength;
         //      //  console.log($attrs);
         //      //  console.log(value.length, minlength, valid);

         //      $ctrl.$setValidity('valminimo', valid);
         //      return value;
         //  });

         $scope.$watch($attrs.ngModel, function(value) {
             if (!value) {
                 return;
             }
             if (typeof value === 'number') {
                 value = String(value);
             }
             var valid = value.length >= minlength;
             $ctrl.$setValidity('valminimo', valid);

         });
     };


     return {
         restrict: 'A',
         require: 'ngModel',
         link: link
     };
 }