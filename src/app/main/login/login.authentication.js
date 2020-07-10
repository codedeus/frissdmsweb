'use strict';

angular.module('app.login')

.factory('AuthenticationService', ['$cookies','UtilityService', '$log', '$rootScope', '$mdDialog', '$window', 'StoreService', '$location', '$state',
    function($cookies,UtilityService ,$log, $rootScope, $mdDialog, $window, StoreService, $location, $state) {
        var service = {};

        service.Login = function(username, password, modules,date) {
      
            $rootScope.processingRequest = true;
            $rootScope.globals = $rootScope.globals || {};

              $log.debug('about to verify user... '+ (new Date() - date));
                StoreService.VerifyUser(username, password).then(function(res) {
                  var data = res.data;
                  localStorage.removeItem('authToken');
                  if(res.authToken){
                      localStorage.setItem('authToken',angular.toJson(res.authToken));
                  }

                  $log.debug('after verifying user...'+(new Date() - date));
                    if (data&&data.length > 0 && data[0]['StaffMember'] != undefined) {
                      $log.debug(new Date() - date);

                            $log.debug(new Date() - date);

                            data.AllModules = modules;

                            if (data[0]['StaffMember'].RoleId) {
                                StoreService.GetAssesibleModules(data[0]['StaffMember'].RoleId).then(function(results) {
                                    data.roles = results.map(function(role) {
                                        var newRoleObj = {};
                                        newRoleObj.Name = role.Name;
                                        newRoleObj.Code = role.Code;
                                        newRoleObj.State = role.State;
                                        newRoleObj.Path = role.Path;
                                        return newRoleObj;
                                    });
                                    service.SetCredentials(data);
                                });
                            } else {
                                $log.debug(new Date() - date);
                                service.SetCredentials(data,date);
                            }

                        // }
                        // else{
                        //   $rootScope.processingRequest = false;
                        //   UtilityService.showAlert('Error!!!','Invalid Username and or password.','Alert Dialog');
                        // }
                      //});
                    } else {
                        $rootScope.processingRequest = false;
                        UtilityService.showAlert('Error!!!','Invalid Username and or password.','Alert Dialog');
                    }
                });
        };

        service.SetCredentials = function(details,date) {
            $log.debug(new Date() - date);
            var staffDetails = {};
            var userRoles = details.roles || [];
            
            staffDetails = details[0]['StaffMember'];

            staffDetails.DepartmentName = details[0]['Department'].Name;
            staffDetails.AllModules = details.AllModules;
            $log.debug(new Date() - date);
            var currentUser = {
                Username: staffDetails.Username,
                Id: staffDetails.Id,
                DepartmentId: staffDetails.DepartmentId,
                Department: staffDetails.Department,
                Name: staffDetails.LastName +" "+ staffDetails.OtherNames,
              //  PosWorkShift: staffDetails.PosWorkShift,
                TenantId: staffDetails.TenantId,
                Roles: userRoles,
                IsSuperAdmin: staffDetails.IsSuperAdmin,
                ResultTemplate: staffDetails.ResultTemplate,
                Role:details[0].Role
            };

            $log.debug(new Date() - date);

            $rootScope.globals = {
                currentUser: currentUser
            }

            if(!staffDetails.IsSuperAdmin){
                UtilityService.setNavigationButtons(userRoles,details.AllModules);
            }
            
            $log.debug(new Date() - date);

            $cookies.putObject('globals', $rootScope.globals);
            localStorage.setItem('globals',angular.toJson($rootScope.globals));
         //   localStorage.setItem('workshift', JSON.stringify(staffDetails.PosWorkShift));
            $rootScope.processingRequest = false;
            $log.debug(new Date() - date);
            $location.path('/dashboard');
            $state.go('app.dashboard');
        };

        service.ClearCredentials = function() {
            delete $rootScope.globals;
            delete $window.localStorage.authToken;
            localStorage.removeItem('globals');
            $cookies.remove('globals');
            $window.location.reload();
        };

        return service;
    }
]);
