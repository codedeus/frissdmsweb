(function () {
    'use strict';

    angular.module('app')

        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('root', {
                abstract: true,
                //url: '/',
                data: {
                    title: 'Home',
                    breadcrumb: 'Home'
                },
                views:{
                    'main@':{
                        templateUrl:'app/layout/main.html'
                    },
                    'toolbar@root':{
                        templateUrl:'app/layout/toolbar.html'
                    },
                    'sidebar@root':{
                        templateUrl:'app/layout/sidebar.html'
                    }
                }
            });
    }
})();
