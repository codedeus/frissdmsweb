
(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('RemoteStoreService', RemoteStoreService);

      RemoteStoreService.$inject = ['$http','BASE_URL'];

    function RemoteStoreService($http,BASE_URL) {
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

        return $http({
            url: `${BASE_URL}Documents`,
            method: 'POST',
            data: payload,
            headers: { 'Content-Type': undefined},
            transformRequest: undefined
        }).then(function(response) {
            return response.data;
          },showErrorMessage);
      }

      function GetAllDocument(){
        return $http.get(`${BASE_URL}Documents`)
        .then(function(res) {
          return res.data;
        })
        .catch(function(res) {
          return res.data;
        });
      }

      function DownloadDocument(fileUid){
        return $http({
          url: `${BASE_URL}Documents/Download?uid=${fileUid}`,
          method: 'GET',
          responseType:'blob',
          transformRequest: undefined
        }).then((res)=>{
          return res.data;
        },showErrorMessage);
      }
    }
})();
