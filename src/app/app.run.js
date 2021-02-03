(function() {
    'use strict';
    angular
        .module('app')
    // /** @ngInject */
    .run(['$transitions','$rootScope','$window','$location','$state',
        function($transitions,$rootScope,$window,$location,$state) {

        $transitions.onStart({}, (transition)=> {
            var nextState = transition.to();
            const currentUser = angular.fromJson($window.localStorage.currentUser);
            if ((currentUser == null || currentUser.Role == null) && $location.path() !== '/login') {
                delete $window.localStorage.authToken;
                $location.path('/login');
                $state.go('root.login');
            } else if ($location.path() !== '/login' && nextState.url !== '/dashboard' && nextState.data 
                && !currentUser.Role=="Admin") {
                $location.path('/dashboard');
                $state.go('root.dashboard');
            }
        });
        
        $transitions.onSuccess({},(transition)=>{
            const currentUser = angular.fromJson($window.localStorage.currentUser);
            var nextState = transition.to();
            const UserRole = currentUser ? currentUser.Role : null;
            $rootScope.$broadcast('handleBroadcast', { pageTitle: nextState.data.name, UserRole});
        });
    }]);
})();
