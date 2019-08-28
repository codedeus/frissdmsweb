
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
            errorMsg = 'Invalid Username';
            break;
          case 403:
            errorMsg = `You don't have permission to perform this action`;
            break;
          case 404:
            errorMsg = 'file not found.';
            break;
          default:
            errorMsg = 'something went wrong.';
            break;
        }
  
        swal("sorry" , errorMsg ,  "error" )
      }

      var service = {
        SaveDocument,
        GetAllDocument,
        DownloadDocument
      };
      return service;

      function SaveDocument(payload){
        var deferred = $q.defer();
        $http({
            url: `${BASE_URL}Documents/create`,
            method: 'POST',
            data: payload,
            headers: { 'Content-Type': undefined},
            transformRequest: undefined
        }).then(function(response) {
          deferred.resolve(response.data);
          },showErrorMessage);

          return deferred.promise;
      }

      function GetAllDocument(){
        var deferred = $q.defer();
        $http.get(`${BASE_URL}Documents`)
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(res) {
          deferred.reject(res);
        });
        return deferred.promise;
      }

      function DownloadDocument(fileUid){
        var deferred = $q.defer();
          $http({
          url: `${BASE_URL}Documents/${fileUid}/download`,
          method: 'GET',
          responseType:'blob',
          transformRequest: undefined
        }).then((res)=>{
          deferred.resolve(res.data);
        },showErrorMessage);
        return deferred.promise;
      }
    }
})();
