// describe('config sets $httpProvider interceptor', function () {
//     var $httpProvider;

//     beforeEach(function () {
//       module(function (_$httpProvider_) {
//         $httpProvider = _$httpProvider_;
//         spyOn($httpProvider.interceptors, 'push');
//       });

//       module('app');
//       inject();
//     });

//     it('should add to $httpProvider interceptors', function () {
//       expect($httpProvider.interceptors.push)
//         .toHaveBeenCalledWith('AuthInterceptor');
//     });
//   });