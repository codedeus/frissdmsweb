(function () {
    'use strict';

    angular.module('app', [
        'angular-jwt',
        'ui.router',
        'app.dashboard',
        'app.newdocument',
        'app.login'
    ]);
})();
