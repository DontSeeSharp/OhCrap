describe('HomeController', function() {
    beforeEach(module('ohCrapApp'));

    var fixture = '<body>' +
        '<div id="loading" class="loading-screen">' +
        '<div class="loading-content">' +
        '<div id="loading-wrapper">' +
        '<div id="loading-text">LOADING</div>' +
        '<div id="loading-content"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="height100" id="page" ng-view ng-cloak></div>' +
        '</body>';
    var $controller;
    var $httpBackend;

    beforeEach(inject(function(_$httpBackend_, _$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        $scope = {};
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);

        // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request

    }));

    // remove the html fixture from the DOM
    afterEach(function() {
        var e = document.body;
        e.parentNode.removeChild(e);
    });


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