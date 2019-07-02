'use strict';

angular
    .module('app')
    .directive('topbar', topbar);

function topbar($transitions, $state, $location, $stateParams) {
    function link(scope, $window) {
        var NO_TITLE = 'Sin título';
        var isMobile = $window.innerWidth() <= 600;
        scope.currentState = $state.current.name || null;

        scope.goTop = function() {
            if (isMobile) {
                angular.element('main').scrollTop(0);
            }
            $location.path('/catalogo');
        };

        $transitions.onStart({}, function($transition) {
            var state = $transition.$to();
            scope.currentState = state.name || null;
            scope.title = state.title || NO_TITLE;
            scope.backState = state.back || null;
        });
        scope.hide = function() {
            var searcher = angular.element('searcher');
            var main = angular.element('main');
            searcher.removeClass('first-fade');
            main.removeClass('first-padding');
        };
    }

    return {
        templateUrl: 'app/core/views/topbar.view.html',
        restrict: 'E',
        link: link
    };
}