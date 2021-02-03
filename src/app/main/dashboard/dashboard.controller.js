(function () {
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['RemoteStoreService','UtilityService'];

    function DashboardController(RemoteStoreService,UtilityService) {

        var vm = this;
    }
})();