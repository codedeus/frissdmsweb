(function ()
{
    'use strict';

    angular
        .module('app.newdocument', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('root.newdocument', {
            url      : '/new-document',
            views    : {
                'content@root': {
                    templateUrl: 'app/main/newdocument/newdocument.html',
                    controller : 'NewDocumentController as vm'
                }
            },
            bodyClass: 'new-document'
        });
    }

})();