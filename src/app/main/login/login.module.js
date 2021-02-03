(function (){
    'use strict';

    angular
        .module('app.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider){
        // State
        $stateProvider.state('root.login', {
            url: '/login',
            data:{
                name:'Login'
            },
            views: {
                'main@': {
                    templateUrl: 'app/layout/content-only.html'
                },
                'content@root.login': {
                    templateUrl: 'app/main/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login'
        });
    }
})();
