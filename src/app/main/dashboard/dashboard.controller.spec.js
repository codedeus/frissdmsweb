describe('DashboardController', function() {
    var $controller, DashboardController,RemoteStoreService,$rootScope,deferred,BASE_URL,$httpBackend,$q,UtilityService,fileSize,downloadedFile;

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
    var fileToDownload = {
        "Uid": "9d4315ee-2f82-4cfe-bd94-fd8883428abf",
        "OriginalFileName": "EMMANUEL N.docx",
        "SavedFileName": "565addebd11a4ba7a3f5aa9f7e197cf0.docx",
        "UploadedBy": "Nwachukwu",
        "CreationDate": "2019-08-23T23:59:46.193+01:00",
        "LastAccessed": "2019-08-24T22:31:17.187+01:00",
        "FileSize": 20853,
        "FileUrl": "C:\\Users\\Nwachukwu\\source\\repos\\FrissDms\\FrissDms\\wwwroot\\Documents\\Nwachukwu\\565addebd11a4ba7a3f5aa9f7e197cf0.docx",
        "$$hashKey": "object:18"
      }
    //beforeEach(angular.mock.module('app.core'));
    beforeEach(module('app.dashboard'));  
    
    beforeEach(inject(function(_$controller_,_$q_,_$rootScope_,_RemoteStoreService_,_BASE_URL_,_$httpBackend_,_UtilityService_) {
        $controller = _$controller_;
        RemoteStoreService = _RemoteStoreService_;
        BASE_URL = _BASE_URL_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        deferred = _$q_.defer();
        UtilityService = _UtilityService_;
    }));
  
    describe('.GetAllDocument()',function(){

        beforeEach(function(){
            spyOn(RemoteStoreService, 'GetAllDocument').and.callThrough();
            DashboardController = $controller('DashboardController', {RemoteStoreService:RemoteStoreService});
        });

        it('should be defined', function() {
            expect(DashboardController).toBeDefined();
        });
      
        it('should initialize with a call to RemoteStoreService.GetAllDocument()', function() {
              expect(RemoteStoreService.GetAllDocument).toHaveBeenCalled();
        });
      
        it('should resolve promise', function () {
            $httpBackend.whenGET(BASE_URL +'Documents').respond(200, $q.when(documentList));
            $httpBackend.flush();
    
            expect(DashboardController.files).toBeDefined();
            expect(DashboardController.files.length).toEqual(3);
        });
    });

    describe('DashboardController.getFileSize()',function(){
        beforeEach(function(){
            spyOn(UtilityService, 'getFileSize').and.callThrough();
            DashboardController = $controller('DashboardController', {RemoteStoreService:RemoteStoreService});
        });

        it('should be defined', function() {
            expect(DashboardController.getFileSize).toBeDefined();
        });

        it('should return result when called',function(){
            expect(UtilityService.getFileSize).not.toHaveBeenCalled();
            DashboardController.getFileSize(2323);
            fileSize = (DashboardController.getFileSize(2323));
            expect(UtilityService.getFileSize).toHaveBeenCalled();
            expect(fileSize).toEqual('2.27 Kb');
        });
    });

    describe('DashboardController.downloadDoc',function(){
        
        beforeEach(function(){
            spyOn(RemoteStoreService, "DownloadDocument").and.callThrough();
            DashboardController = $controller('DashboardController', {RemoteStoreService:RemoteStoreService});
        });

        it('should be defined',function(){
            expect(DashboardController.downloadDoc).toBeDefined();
        });

        it('should call RemoteStoreService.DownloadDocument() and download the file when called',function(){
            DashboardController.downloadDoc(fileToDownload.Uid);
            expect(RemoteStoreService.DownloadDocument).toHaveBeenCalled();
        })
    });
  });