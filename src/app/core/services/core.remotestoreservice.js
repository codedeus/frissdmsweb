
(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('RemoteStoreService', RemoteStoreService);

      RemoteStoreService.$inject = ['$http','BASE_URL','$q'];

    function RemoteStoreService($http,BASE_URL,$q) {
      //var GenderTable_ = null;
      //var BASE_URL = 'https://localhost:9001/api/';

      function showErrorMessage(message){
        var errorMsg = "";
        switch(message.status){
          case 401:
            errorMsg = 'Invalid Email/Password';
            break;
          case 403:
            errorMsg = `You don't have permission to perform this action`;
            break;
          case 404:
            errorMsg = 'resource not found.';
            break;
          case 400:
              errorMsg = message.data;
              break;
          default:
            errorMsg = 'something went wrong.';
            break;
        }
  
        swal("sorry" , errorMsg ,  "error" )
      }

      function GetServices(department){
        var deferred = $q.defer();
        
        $http.get(`${BASE_URL}Services?department=${department}`)
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }

      function SubmitBill(bill){
        var deferred = $q.defer();
        $http.post(`${BASE_URL}invoice`,bill)
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }

      const GetInvoices = (searchText) =>{
        var deferred = $q.defer();
        $http.get(`${BASE_URL}invoice?searchText=${searchText}`)
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }

      const GetSelectedInvoice = (id) =>{
        var deferred = $q.defer();
        $http.get(`${BASE_URL}invoice/${id}`)
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }

      function SubmitPayment(id){
        var deferred = $q.defer();
        $http.post(`${BASE_URL}invoice/${id}/pay`,{})
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }
      
      function Login(payload){
        var deferred = $q.defer();
        $http.post(`${BASE_URL}auth/login`, payload)
        .then(function(res) {
          deferred.resolve(res.data);
        },showErrorMessage);
        return deferred.promise;
      }

      var service = {
        GetServices,
        SubmitBill,
        GetSelectedInvoice,
        GetInvoices,
        SubmitPayment,
        Login
      };
      return service;
    }
})();
