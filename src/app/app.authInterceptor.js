(function(){
    'use strict';

    angular.module('app')
    .factory('AuthInterceptor', [function () {

    return {
        request: function (config) {
            debugger;
            config.headers = config.headers || {};
            config.headers.Username = 'Emmanuel';
            config.headers.Admin = 1;
            return config;
        }
    };
  }]);
})();
