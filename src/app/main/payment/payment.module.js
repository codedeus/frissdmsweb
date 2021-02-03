(function ()
{
    'use strict';

    angular
        .module('app.billing.billpayment', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('root.billpayment', {
            url      : '/billpayment',
            data:{
                name:"Bill Payment"
            },
            views    : {
                'content@root': {
                    templateUrl: 'app/main/payment/payment.html',
                    controller : 'PaymentController as vm'
                }
            },
            bodyClass: 'payment'
        });
    }

})();