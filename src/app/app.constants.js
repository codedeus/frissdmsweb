(function () {
  'use strict';

  angular.module('app.core')
    .constant('BASE_URL', 'https://localhost:9001/api/')
    .constant('APP_NAME', 'Library Manager')
    .constant('APP_VERSION', '0.0.4');
})();
