(function (){
    'use strict';

    angular
        .module('app.login', ['app.core'])
        .config(config);

    /** @ngInject */
    function config($stateProvider){
        // State
        $stateProvider.state('root.login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/layout/main.html',
                },
                'content@root.login': {
                    templateUrl: 'app/main/login/login.html',
                    controller : 'LoginController as vm'
                }
            }
        });
    }
})();
