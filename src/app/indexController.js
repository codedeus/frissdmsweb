(function () {
    'use strict';

    angular.module('app')

            .controller('IndexController', IndexController);

    IndexController.$inject = ['$log','$state','$scope'];

    function IndexController($log, $state,$scope) {
        var vm = this;

        vm.getClass = getClass;
        vm.navOff = navOff;
        vm.navOn = navOn;
        vm.searchToggle = searchToggle;
        vm.currentPage = "Dashboard";
        vm.UserRole = null;

            //data change broadcast handler
        $scope.$on("handleBroadcast", function (event, args) {
            if (args) {
                vm.currentPage = args.pageTitle;
                vm.UserRole = args.UserRole;
                console.log(vm.UserRole);
            }
        });

        vm.Logout = function(){
            localStorage.removeItem('authToken');
            localStorage.removeItem('currentUser');
            $state.go('root.login');
        }

        function getClass(path) {
            if ($state.current.name.substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }

        function navOff() {
            $('.side-menu').hide('slow');
            $('.top-bar').animate({left: '0px'}, 'slow');
            $('.page').animate({marginLeft: '0px'}, 'slow');
            $('.toggle-button.on').show('slow');
            $('.toggle-button.off').hide('slow');
        }

        function navOn() {
            $('.side-menu').show('slow');
            $('.top-bar').animate({left: '130px'}, 'slow');
            $('.page').animate({marginLeft: '130px'}, 'slow');
            $('.toggle-button.on').hide('slow');
            $('.toggle-button.off').show('slow');
        }

        function searchToggle() {
            $('.tools .search .input-group').fadeToggle('slow');
        }
    }
})();
