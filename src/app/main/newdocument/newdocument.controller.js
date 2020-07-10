(function () {
    'use strict';

    angular.module('app.newdocument')
        .controller('NewDocumentController', NewDocumentController);

    NewDocumentController.$inject = ['RemoteStoreService'];

    function NewDocumentController(RemoteStoreService) {
        var vm = this;

        vm.save = function(file,documentType){

            var payload = new FormData();
            payload.append('File',file);
            RemoteStoreService.IndexManagementDocument(payload,documentType).then(()=>{
                swal("File saved successfully!", "success");
                vm.myFile = null;
            });
        }
    }
})();