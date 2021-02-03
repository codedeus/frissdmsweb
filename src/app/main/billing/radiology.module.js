(function ()
{
    'use strict';

    angular
        .module('app.billing.radiology', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('root.radiologybilling', {
            url      : '/lab-radiology',
            data:{
                name:"Radiology Billing"
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
                        Template:"Radiology",
                        Prefix:"RD"
                    };
                }
            },
            bodyClass: 'radiology-billing'
        });
    }

})();