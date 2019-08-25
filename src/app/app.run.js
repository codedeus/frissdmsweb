(function() {
    'use strict';
    angular
        .module('app')
    // /** @ngInject */
    .run(['$transitions',
        function($transitions) {

        $transitions.onStart({}, function() {

        });
    }]);
})();
