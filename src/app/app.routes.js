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
            })
            .state('root.dashboard', {
                url: '/dashboard',
                data: {
                    title: 'dashboard',
                    breadcrumb: 'dashboard'
                },
                views: {
                    'content@root': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                }
            })              
            .state('root.json', {
                url: '/json',
                data: {
                    title: 'Json',
                    breadcrumb: 'Json'
                },
                views: {
                    'content@root': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'JC'
                    }
                }
            })
    }
})();
