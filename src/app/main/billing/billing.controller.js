(function () {
    'use strict';

    angular.module('app.billing')
        .controller('BillingController', BillingController);

        BillingController.$inject = ['RemoteStoreService','searchFilter','$window'];

    function BillingController(RemoteStoreService, searchFilter,$window) {
        var vm = this;
        vm.departmentCategory = searchFilter;
        vm.bill = {};
        vm.bill.Prefix = searchFilter.Prefix;
        vm.bill.Services = [];

        const clearForm = ()=>{
            vm.bill = {};
            vm.bill.Prefix = searchFilter.Prefix;
            vm.bill.Services = [];
        }

        RemoteStoreService.GetServices(searchFilter.Template).then((response)=>vm.services = response);

        vm.serviceSeleted = (selectedService)=>{
            if(selectedService!=null){
                var toAdd = true;

                for (var i = 0; i < vm.bill.Services.length; i++) {
                    if (vm.bill.Services[i].Id == selectedService.Id) {
                        toAdd = false;
                        break;
                    }
                }
    
                if (toAdd) {
                    selectedService.Quantity = 1;
                    vm.bill.Services.push(selectedService);
                    selectedService = null;
                }
                //getAmountSummary();
                
                vm.selectedService = undefined;
            }
            
        }

        vm.removeService = (selectedItem)=>{
            if(selectedItem!=null){
                var index = vm.bill.Services.indexOf(selectedItem);
                vm.bill.Services.splice(index, 1);
            }
        }

        vm.clearForm = clearForm;

        vm.submitBill = ()=>{
            for(var i=0;i<vm.bill.Services.length;i++){
                if(vm.bill.Services[i].Quantity == 0 || vm.bill.Services[i].Quantity == null){
                    //swal(`quantity for ${vm.bill.Services[i].Name} cannot be less than 1`, "error");
                    swal("sorry!", `quantity for ${vm.bill.Services[i].Name} cannot be less than 1`, "error");
                    return;
                }
            }

            RemoteStoreService.SubmitBill(vm.bill).then((res)=>{
                swal("Submitted successfully!", `the invoice number is ${res.InvoiceNumber}`, "success");
                clearForm();
            })
        }
    }
})();