describe('AuthInterceptor factory', function() {
    var AuthInterceptor;
    var config = {};

    beforeEach(angular.mock.module('app'));
  
    beforeEach(inject(function(_AuthInterceptor_) {
        AuthInterceptor = _AuthInterceptor_;
    }));

   
    it('AuthInterceptor{} should exist', function() {
      expect(AuthInterceptor).toBeDefined();
    });

    describe('.request()',function(){
        it('.request() should be defined',function(){
            expect(AuthInterceptor.request).toBeDefined();
        })

        it('should have Username header value',function(){
            expect(AuthInterceptor.request(config).headers.Username).toBeDefined();
        })

        it('should have Admin header value',function(){
            expect(AuthInterceptor.request(config).headers.Admin).toBeDefined();
        })
    })
});