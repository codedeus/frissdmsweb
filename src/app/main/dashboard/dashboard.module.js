(function (){
    'use strict';

    angular
        .module('app.dashboard', ['app.core'])
        .config(config);

    /** @ngInject */
    function config($stateProvider){
        // State
        $stateProvider.state('root.dashboard', {
            url: '/dashboard',
            data:{
                name:"Dashboard"
            },
            views: {
                'content@root': {
                    templateUrl: 'app/main/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm'
                }
            }
        });
    }

})();