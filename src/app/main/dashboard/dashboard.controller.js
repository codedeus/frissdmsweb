(function () {
    'use strict';

    angular.module('app.dashboard', ['ngFileSaver'])
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['UtilityService','RemoteStoreService','FileSaver', 'Blob'];

    function DashboardController(UtilityService,RemoteStoreService,FileSaver, Blob) {

        var vm = this;

        vm.select = select;
        vm.getFileSize = getFileSize;
        vm.downloadDoc = downloadDocument
        getAllFiles();

        /**
         * Select a document
         *
         * @param item
         */
        function select(item)
        {
            vm.selected = item;
        }

        
        function getAllFiles(){
            RemoteStoreService.GetAllDocument().then((res)=>{
                vm.files = res;
            });
        }

        function getFileSize(byteSize){
            return UtilityService.getFileSize(byteSize);
        }

        function downloadDocument(file){
            RemoteStoreService.DownloadDocument(file.Uid).then(function (data) {
                var data = new Blob([data],{type:data.type });
                FileSaver.saveAs(data, file.OriginalFileName);
                file.LastAccessed = new Date();
            });
        }
    }
})();