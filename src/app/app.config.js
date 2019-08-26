(function () {
    'use strict';

    angular
        .module('app')
        .config(httpConfig);

    function httpConfig($httpProvider){
      $httpProvider.interceptors.push('AuthInterceptor');
    }
})();
