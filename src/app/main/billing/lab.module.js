(function ()
{
    'use strict';

    angular
        .module('app.billing.lab', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('root.labbilling', {
            url      : '/lab-billing',
            data:{
                name:"Lab Billing"
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
                        Template:"Laboratory",
                        Prefix:"LB"
                    };
                }
            },
            bodyClass: 'lab-billing'
        });
    }

})();