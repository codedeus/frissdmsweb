(function () {

    'use strict';
  
    angular
      .module('app.core')
      .service('authService', authService);
  
    authService.$inject = ['$state', '$timeout'];
  
    function authService($state, $timeout) {
  
      var accessToken;
      var idToken;
      var expiresAt;
  
      function getIdToken() {
        return idToken;
      }
  
      function getAccessToken() {
        
        if (localStorage&&localStorage.authToken) {
            return angular.fromJson(localStorage.authToken);
        }
        return null;
      }
  
      function login() {
      }
  
      function handleAuthentication() {
        
      }
  
      function localLogin(authResult) {
        
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        // expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        // accessToken = authResult.accessToken;
        // localStorage.setItem('authToken', authResult.accessToken);
        // idToken = authResult.idToken;
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('authToken', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
      }

  
      function logout() {
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
        // Remove tokens and expiry time
        accessToken = '';
        idToken = '';
        expiresAt = 0;
  
        $state.go('root.login');
      }
  
      function isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
      }
  
      return {
        login: login,
        getIdToken: getIdToken,
        getAccessToken: getAccessToken,
        handleAuthentication: handleAuthentication,
        logout: logout,
        isAuthenticated: isAuthenticated
      }
    }
  })();
  