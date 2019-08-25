(function(){
    'use strict';

    angular.module('app')
    .factory('AuthInterceptor', ['$window', '$q', function ($window, $q) {

    return {
        request: function (config) {
            config.headers = config.headers || {};
            config.headers.Username = 'Nwachukwu';
            config.headers.Admin = 1;
            return config;
        },
        responseError: function (response) {
            return $q.reject(response);
        },
        response: function (config) {
            return config;
        }
    };
  }]);
})();
