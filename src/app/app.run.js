(function() {
    'use strict';
    angular
        .module('app')
    // /** @ngInject */
    .run(['$transitions','authService',
        function($transitions,$window) {

            $transitions.onStart( {}, function(trans,$state) {
                debugger;

                // if(!(localStorage.getItem('isLoggedIn') === 'true')&&trans.$to().self.url!=='/login'){
                //     //event.preventDefault();
                //     localStorage.clear();
                //     $state.go('root.login');
                // }
                // Check $transition$.$to().name for state name
            });
    }]);
})();
