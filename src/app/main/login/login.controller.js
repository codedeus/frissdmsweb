(function() {
    'use strict';

    angular.module("app.login").controller('LoginController', function($scope, AuthenticationService, HmisConstants,$http) {
        var vm = this;
        $('.container').find('img').each(function(){
          var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
          $(this).addClass(imgClass);
         })
        vm.clear = function() {
            localStorage.clear();
        };

        vm.login = function() {
          //$scope.processingRequest = true;
          var date  = new Date();

            AuthenticationService.Login(vm.username, vm.password,HmisConstants.allModules,date);
        };

        vm.logout = function() {

            AuthenticationService.ClearCredentials(vm.modules);
        };
    });
})();
