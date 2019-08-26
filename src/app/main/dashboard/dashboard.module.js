(function (){
    'use strict';

    angular
        .module('app.dashboard', ['app.core', 'ngFileSaver'])
        .config(config);

    /** @ngInject */
    function config($stateProvider){
        // State
        $stateProvider.state('root.dashboard', {
            url: '/dashboard',
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