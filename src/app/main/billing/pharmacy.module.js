(function ()
{
    'use strict';

    angular
        .module('app.billing.pharmacy', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('root.pharmacybilling', {
            url      : '/pharmacy-billing',
            data:{
                name:"Pharmacy Billing"
            },
            views    : {
                'content@root': {
                    templateUrl: 'app/main/billing/billing.html',
                    controller : 'BillingController as vm'
                }
            },
            resolve  : {
                searchFilter:function(){
                    return {
                        Template:"Pharmacy",
                        Prefix:"PM"
                    };
                }
            },
            bodyClass: 'pharmacy-billing'
        });
    }

})();