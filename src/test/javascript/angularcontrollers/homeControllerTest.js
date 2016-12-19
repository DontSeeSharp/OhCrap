describe('HomeController', function() {
    beforeEach(module('ohCrapApp'));

    var fixture =
        '<div id="loading" class="loading-screen">' +
        '<div class="loading-content">' +
        '<div id="loading-wrapper">' +
        '<div id="loading-text">LOADING</div>' +
        '<div id="loading-content"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="height100" id="page" ng-view ng-cloak>' +
            '<div class="" id="nav-icon3" ng-click="ToggleMenu()">' +
            '<span></span>' +
            '<span></span>' +
            '<span></span>' +
            '<span></span>' +
            '</div>' +
            '<div class="circle" ng-class="{\'expand\':menuVisible}"></div>' +
            '<input id="search-box" class="pac-input controls position" places-auto-complete size=80' +
            'ng-model="vm.address"' +
            'component-restrictions="{country:\'est\'}"' +
            'types="{{types}}"' +
            'on-place-changed="vm.placeChanged()" />' +
            '<div class="menu" ng-class="{\'animate\':menuVisible}">' +
            '<ul>' +
            '<li ng-class="{\'animate\':menuVisible}" ng-if="!userAuthenticated" ng-click="signIn()"><a href="">Sign in</a></li>' +
            '<li ng-class="{\'animate\':menuVisible}" ng-if="userAuthenticated" ng-click="logout()"><a href="">Sign out</a></li>' +
            '<li ng-class="{\'animate\':menuVisible}"><a href="">Account</a></li>' +
            '<li ng-class="{\'animate\':menuVisible}" ng-click="switchToAddLocation()"><a href="">Add new location</a></li>' +
            '<li ng-class="{\'animate\':menuVisible}"><a href="">Settings</a></li>' +
            '<li ng-class="{\'animate\':menuVisible}"><a href="">Activity</a></li>' +
            '</ul>' +
            '</div>' +
        '</div>';
    var $controller;
    var $httpBackend;
    var $timeout;
    var NgMap;

    beforeEach(inject(function(_$httpBackend_, _$controller_, _$timeout_, _NgMap_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
        $timeout = _$timeout_;
        NgMap = _NgMap_;
        $scope = {};

        var controller = $controller('HomeCtrl', { $scope: $scope });
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);

        // Note that this HTTP backend is ngMockE2E's, and will make a real HTTP request

    }));

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('loading'));
        document.body.removeChild(document.getElementById('page'));
    });


    it('gets bathroom json', function(done) {
        //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
        $httpBackend.whenGET('toilets').respond(200, [{"id":30,"name":null,"address":"E. Vilde tee 52, 13416 Tallinn, Eesti","latitude":59.403,"longitude":24.6944,"adder":"user","rating":0,"free":""}]);

        $scope.getBathrooms();

        var emptyBathrooms = {};
        $httpBackend.flush();
        expect($scope.allBathrooms).not.toEqual(emptyBathrooms);
        done();
    });

    it('should fail bathroom json', function(done) {
        //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
        $httpBackend.whenGET('toilets').respond(401, '');

        $scope.getBathrooms();

        var emptyBathrooms = {};
        $httpBackend.flush();
        expect($scope.status).toEqual("fail");
        done();
    });

    it('should test search box', function(done) {
        //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
        document.getElementById("search-box").value = "Muraste";


        done();
    });

    it('should test search box', function(done) {
        //$httpBackend.whenGET('http://localhost:8090/toilets').passThrough();
        document.getElementById("search-box").value = "Muraste";


        done();
    });

    it('toggles menu in and out', function(done) {
        expect(document.getElementById("nav-icon3").getAttribute('class')).toMatch('');
        $scope.ToggleMenu();
        $scope.ToggleMenu();
        expect(document.getElementById("nav-icon3").getAttribute('class')).toMatch('open');
        $scope.ToggleMenu();
        expect(document.getElementById("nav-icon3").getAttribute('class')).toMatch('ng-scope');

        done();
    });

    it('should get nearest location', function(done) {
        //$httpBackend.whenPOST('getNearestLocation').respond(200, {"result":"success","lng":24.6701,"lat":59.3964});
        $httpBackend.whenGET('toilets').respond(200, [{"id":30,"name":null,"address":"E. Vilde tee 52, 13416 Tallinn, Eesti","latitude":59.403,"longitude":24.6944,"adder":"user","rating":0,"free":""}]);

        var vm = this;
        NgMap.getMap().then(function(map) {
            vm.map = map;
            vm.map.getCenter().lat();
            $scope.getNearestLocation();
        });

        $httpBackend.flush();
        done();
    });


});