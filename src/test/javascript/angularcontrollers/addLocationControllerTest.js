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