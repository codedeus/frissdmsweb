(function(){
    'use strict';

    angular.module('app')
    .factory('AuthInterceptor', [function () {

    return {
        request: function (config) {
            config.headers = config.headers || {};
    
            if (localStorage&&localStorage.authToken) {
                console.log((localStorage.authToken))
                
                config.headers.Authorization = 'Bearer ' + (localStorage.authToken);
            }
            
            return config;
        }
    };
  }]);
})();
