describe('NewDocumentController', function() {
    var $controller, NewDocumentController,RemoteStoreService;
    
    beforeEach(module('app.core'));
    beforeEach(module('app.newdocument'));  
    
    beforeEach(inject(function(_$controller_,_RemoteStoreService_) {
        $controller = _$controller_;
        RemoteStoreService = _RemoteStoreService_;
        NewDocumentController = $controller('NewDocumentController', {RemoteStoreService:RemoteStoreService});
    }));
  
    it('should be defined',function(){
        expect(NewDocumentController).toBeDefined();
    });

    describe('NewDocumentController.save()',function(){
        
        beforeEach(function(){
            spyOn(RemoteStoreService, "SaveDocument").and.callThrough();
            NewDocumentController = $controller('NewDocumentController', {RemoteStoreService:RemoteStoreService});
        });

        it('should be defined',function(){
            expect(NewDocumentController.save).toBeDefined();
        });

        it('should call RemoteStoreService.SaveDocument() when called',function(){
            NewDocumentController.save();
            expect(RemoteStoreService.SaveDocument).toHaveBeenCalled();
        })
    });

});