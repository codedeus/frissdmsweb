(function(){
    'use strict';

    angular.module('app')
    .factory('AuthInterceptor', [function () {

    return {
        request: function (config) {
            config.headers = config.headers || {};
            config.headers.Username = 'Emmanuel';
            config.headers.Admin = 0;
            return config;
        }
    };
  }]);
})();
