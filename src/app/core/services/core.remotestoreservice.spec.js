describe('RemoteStoreService Factory',function(){
    var RemoteStoreService,$q,result,deferred,$rootScope,$httpBackend,BASE_URL;
    var fileToSave = {};
    var documentList = [
        {
          "Uid": "9d4315ee-2f82-4cfe-bd94-fd8883428abf",
          "OriginalFileName": "EMMANUEL N.docx",
          "SavedFileName": "565addebd11a4ba7a3f5aa9f7e197cf0.docx",
          "UploadedBy": "Nwachukwu",
          "CreationDate": "2019-08-23T23:59:46.193+01:00",
          "LastAccessed": "2019-08-24T22:31:17.187+01:00",
          "FileSize": 20853,
          "FileUrl": "C:\\Users\\Nwachukwu\\source\\repos\\FrissDms\\FrissDms\\wwwroot\\Documents\\Nwachukwu\\565addebd11a4ba7a3f5aa9f7e197cf0.docx",
          "$$hashKey": "object:18"
        },
        {
          "Uid": "3681254d-ef63-4e76-b2d2-39fb0aea9cce",
          "OriginalFileName": "Emmanuel Ugwuanyi.pdf",
          "SavedFileName": "84e72661de6f46a4ad02862c4609a6ab.pdf",
          "UploadedBy": "Nwachukwu",
          "CreationDate": "2019-08-24T00:06:22.653+01:00",
          "LastAccessed": "2019-08-24T22:32:14.97+01:00",
          "FileSize": 147515,
          "FileUrl": "C:\\Users\\Nwachukwu\\source\\repos\\FrissDms\\FrissDms\\wwwroot\\Documents\\Nwachukwu\\84e72661de6f46a4ad02862c4609a6ab.pdf",
          "$$hashKey": "object:17"
        },
        {
          "Uid": "c72b5b99-4981-47ee-9018-a23e69dcfddb",
          "OriginalFileName": "84e72661de6f46a4ad02862c4609a6ab.pdf",
          "SavedFileName": "e15ccfd555124fa9b9051aae65161b55.pdf",
          "UploadedBy": "Nwachukwu",
          "CreationDate": "2019-08-24T20:35:58.57+01:00",
          "LastAccessed": "2019-08-24T22:33:44.493+01:00",
          "FileSize": 147515,
          "FileUrl": "C:\\Users\\Nwachukwu\\source\\repos\\FrissDms\\FrissDms\\wwwroot\\Documents\\e15ccfd555124fa9b9051aae65161b55.pdf",
          "$$hashKey": "object:16"
        }        
      ];
  
    beforeEach(angular.mock.module('app.core'));
    
    beforeEach(inject(function(_RemoteStoreService_,_$q_,_BASE_URL_,_$rootScope_,_$httpBackend_) {
        RemoteStoreService = _RemoteStoreService_;
        $q = _$q_;
        BASE_URL = _BASE_URL_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    it('RemoteStoreService{} should exist', function() {
        expect(RemoteStoreService).toBeDefined();
    });

    describe('.SaveDocument()', function() {
        it('should exist', function() {
            expect(RemoteStoreService.SaveDocument).toBeDefined();
        });
    });

    describe('.GetAllDocument()', function() {
        it('should exist', function() {
            expect(RemoteStoreService.GetAllDocument).toBeDefined();
        });

        var result;

        beforeEach(function() {
          result = [];
          spyOn(RemoteStoreService, "GetAllDocument").and.callThrough();
        });
    
        it('should return a list of all saved files', function() {
            $httpBackend.whenGET(BASE_URL + 'Documents').respond(200, $q.when(documentList));
        
            expect(RemoteStoreService.GetAllDocument).not.toHaveBeenCalled();
            expect(result).toEqual([]);
        
            RemoteStoreService.GetAllDocument()
            .then(function(res) {
                result = res;
            });
            $httpBackend.flush();
        
            expect(RemoteStoreService.GetAllDocument).toHaveBeenCalled();
            expect(result.length).toEqual(3);
        });
    });

    describe('.DownloadDocument()', function() {
        it('should exist', function() {
            expect(RemoteStoreService.DownloadDocument).toBeDefined();
        });
    });
})