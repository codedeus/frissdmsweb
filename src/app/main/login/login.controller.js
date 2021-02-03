(function () {
    'use strict';

    angular.module('app.login')
        .controller('LoginController', LoginController);

        LoginController.$inject = ['RemoteStoreService','$location','$state'];

    function LoginController(RemoteStoreService,$location,$state) {

        var vm = this;
        vm.login = {};

        vm.signin = ()=>{
            RemoteStoreService.Login(vm.login).then((res)=>{
                if(res && res.AccessToken && res.AccessToken.AuthToken){

                    localStorage.removeItem('authToken');
                    localStorage.removeItem('currentUser');
                    
                    localStorage.setItem('authToken',angular.toJson(res.AccessToken.AuthToken));
                    localStorage.setItem('currentUser',angular.toJson(res));
                    
                    $location.path('/dashboard');
                    $state.go('root.dashboard');


                }
            })
        }
    }
})();