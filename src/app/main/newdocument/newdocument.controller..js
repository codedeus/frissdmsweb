(function () {
    'use strict';

    angular.module('app.newdocument')
        .controller('NewDocumentController', NewDocumentController);

    NewDocumentController.$inject = ['RemoteStoreService'];

    function NewDocumentController(RemoteStoreService) {
        var vm = this;

        vm.save = function(file){
            var payload = new FormData();
            payload.append('File',file);
            RemoteStoreService.SaveDocument(payload).then(()=>{
                swal("Good job!", "File saved successfully!", "success");
                vm.myFile = null;
            });
        }
    }
})();