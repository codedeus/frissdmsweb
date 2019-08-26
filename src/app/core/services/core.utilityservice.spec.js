describe('Utility factory', function() {
    var UtilityService;

    
    beforeEach(angular.mock.module('app.core'));
  
    
    beforeEach(inject(function(_UtilityService_) {
        UtilityService = _UtilityService_;
    }));

   
    it('UtilityService{} should exist', function() {
      expect(UtilityService).toBeDefined();
    });

    describe('.getFileSize()', function() {
        // A simple test to verify the method all exists
      it('getFileSize() should exist', function() {
        expect(UtilityService.getFileSize).toBeDefined();
      });

      it('1024 bytes should equal 1.00 Kb',function(){
          expect(UtilityService.getFileSize(1024)).toEqual('1.00 Kb')
      })

      it('0 bytes should equal 0.00 bytes',function(){
        expect(UtilityService.getFileSize(0)).toEqual('0.00 bytes')
      })

      it('null should equal 0.00 bytes',function(){
        expect(UtilityService.getFileSize()).toEqual('0.00 bytes')
      })

      it('24984343 should equal 23.83 Mb',function(){
        expect(UtilityService.getFileSize(24984343)).toEqual('23.83 Mb')
      })
    });
});