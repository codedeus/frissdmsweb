
(function () {
    'use strict';

    angular
      .module('app')
      .factory('RemoteStoreService', RemoteStoreService);

      RemoteStoreService.$inject = ['$http','BASE_URL','$q'];

    function RemoteStoreService($http,BASE_URL,$q) {
      //var GenderTable_ = null;

      if (window.JSON && !window.JSON.dateParser) {
        var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
        var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
        JSON.dateParser = function (key, value) {
            if (typeof value === 'string') {
                var a = reISO.exec(value);
                if (a){
                    return new Date(value);
                }
                a = reMsAjax.exec(value);
                if (a) {
                    var b = a[1].split(/[-+,.]/);
                    return new Date(b[0] ? +b[0] : 0 - +b[1]);
                }
            }
            return value;
        };
      }

      function showErrorMessage(message){
     
        var errorMsg = "";
  
        switch(message.status){
          case 401:
            errorMsg = 'User not authenticated';
          case 403:
            errorMsg = `You don't have permission to perform this action`;
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
        var deferred = $q.defer();
        $http({
            url: `${BASE_URL}Documents`,
            method: 'POST',
            data: payload,
            headers: { 'Content-Type': undefined},
            transformRequest: undefined
        }).then(function(response) {

            deferred.resolve(response.data);
          })
          .catch(showErrorMessage);
  
        return deferred.promise;
      }

      function GetAllDocument(){
        var deferred = $q.defer();
        $http.get( `${BASE_URL}Documents`).then(function(items){
          deferred.resolve(items.data);
        },showErrorMessage);
        return deferred.promise;
      }

      function DownloadDocument(fileUid){
        var deferred = $q.defer();
        $http({
          url: `https://localhost:9001/api/Documents/Download?uid=${fileUid}`,
          method: 'GET',
          responseType:'blob',
          transformRequest: undefined
        }).then((res)=>{
          deferred.resolve(res.data);
        },showErrorMessage)
        return deferred.promise;
      }
    }
})();
