(function ()
{
    'use strict';

    angular
        .module('app.billing', [
            'app.billing.lab',
            'app.billing.radiology',
            'app.billing.pharmacy',
            'app.billing.billpayment'
        ]);
})();