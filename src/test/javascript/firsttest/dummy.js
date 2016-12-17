describe('HomeController', function() {
  beforeEach(module('ohCrapApp'));
  beforeEach(angular.mock.http.init);
  afterEach(angular.mock.http.reset);

  var $controller;

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $scope = {};

    // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request
    
  }));

    it('gets bathroom json', function(done) {
      //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
      $httpBackend.whenGET('toilets').respond([{"id":1,"name":null,"address":"ehitajate tee 5","latitude":59.4035,"longitude":24.6882}]);
      var controller = $controller('HomeCtrl', { $scope: $scope });
      
      $scope.getBathrooms();

      setTimeout(function() {
      var emptyBathrooms = {};
      expect($scope.allBathrooms).not.toEqual(emptyBathrooms);
      done();
      }, 1000);

    });
});

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