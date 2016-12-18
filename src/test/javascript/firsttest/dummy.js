describe('HomeController', function() {
  beforeEach(module('ohCrapApp'));


  var $controller;
  var $httpBackend;

  beforeEach(inject(function(_$httpBackend_, _$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    $scope = {};

    // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request

  }));


    it('gets bathroom json', function(done) {
      //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
      $httpBackend.whenGET('toilets').respond(200, [{"id":30,"name":null,"address":"E. Vilde tee 52, 13416 Tallinn, Eesti","latitude":59.403,"longitude":24.6944,"adder":"user","rating":0,"free":""}]);
      var controller = $controller('HomeCtrl', { $scope: $scope });

      $scope.getBathrooms();

      var emptyBathrooms = {};
      $httpBackend.flush();
      expect($scope.allBathrooms).not.toEqual(emptyBathrooms);
      done();
    });
});
/*
describe('addLocationCtrl', function() {
  beforeEach(module('ohCrapApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = {};

    // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request
    
  }));

    it('set latitude', function(done) {
      var controller = $controller('addLocationCtrl', { $scope: $scope });
      
      $scope.checkIfLocationContainsCoordinates();

      setTimeout(function() {
      expect($scope.location.lat).not.toEqual(null);
      done();
      }, 1000);

    });
});
    */