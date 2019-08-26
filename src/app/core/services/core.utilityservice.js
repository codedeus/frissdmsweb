(function () {
    'use strict';
  
    angular
    .module('app.core')
    .factory('UtilityService', UtilityService);
  
    UtilityService.$inject = [ ];
  
    function UtilityService() {

      var service = {
        getFileSize
      }

      return service;

      function getFileSize(byteSize){
        let size = byteSize||0;
        let unit = 'bytes';
  
        if(byteSize && byteSize>=1024){
          size = byteSize/1024
          unit = 'Kb';

          if(size >= 1024){
            size = size/1024
            unit = 'Mb';

            if(size>=1024){
              unit = 'Gb';
              size = size/1024;
            }
          }
        }
        return `${size.toFixed(2)} ${unit}`;
      }
    }
  })();
  