(function(){
    'use strict';

    angular.module('app')
    .factory('AuthInterceptor', ['$window', '$q', '$injector','$rootScope',function ($window, $q, $injector,$rootScope) {

        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage && $window.localStorage.authToken) {
                    config.headers.authorization = 'Bearer ' + angular.fromJson($window.localStorage.authToken);
                }
                return config;
            },
            responseError: function (response) {
                if(response !== null && response.status === 401){
                    var $state = $injector.get('$state');
                    delete $window.localStorage.authToken;
                    $state.go('root.login');
                }
                $rootScope.processingRequest = false;
                return $q.reject(response);
            },
            response: function (config) {
                return config;
            }
        };
  }]);
})();
