(function () {
    'use strict';

    angular.module('app.billing.billpayment')
        .controller('PaymentController', PaymentController);

        PaymentController.$inject = ['RemoteStoreService'];

    function PaymentController(RemoteStoreService) {
        var vm = this;
        
        vm.bill = {};
        vm.bill.Services = [];

        const clearForm = ()=>{
            vm.bill = {};
            vm.bill.Services = [];
        }

        const GetInvoices =()=>{
            RemoteStoreService.GetInvoices(null).then((response)=>vm.invoices = response);
        }

        GetInvoices();

        vm.invoiceSelected = (selectedService)=>{
            if(selectedService!=null){
                RemoteStoreService.GetSelectedInvoice(selectedService.Id).then((invoice)=>{
                    if(invoice==null){
                        swal("sorry!", `invoice not valid`, "error");
                        return;
                    }
                    if(invoice.CustomerDateOfBirth){
                        invoice.CustomerDateOfBirth = new Date(invoice.CustomerDateOfBirth);
                    }
                    vm.bill = invoice;
                });
            }
            
        }

        vm.removeService = (selectedItem)=>{
            if(selectedItem!=null){
                var index = vm.bill.Services.indexOf(selectedItem);
                vm.bill.Services.splice(index, 1);
            }
        }

        vm.clearForm = clearForm;

        vm.submitPayment = ()=>{
            if(vm.bill && vm.bill.Services && vm.bill.Services.length<=0){
                swal("sorry!", `no invoice selected`, "error");
            }

            RemoteStoreService.SubmitPayment(vm.bill.Id).then((res)=>{
                swal("Submitted successfully!", `payment submitted successfully.\n Receipt Number is: ${res}`, "success");
                clearForm();
                GetInvoices();
            })
        }
    }
})();