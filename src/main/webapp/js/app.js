'use strict';

/* App Module */

var addressbookApp = angular.module('addressbookApp', [
    'ngRoute',
    'addressbookControllers'
]);

addressbookApp.factory('locationService', function () {
    var savedData = {};

    function set(data) {
        console.log("set!!!");
        savedData = data;
    }

    function get() {
        console.log("returning!");
        console.log(savedData);
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});

addressbookApp.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl as vm'
        }).when('/addLocation', {
            templateUrl: 'partials/addLocation.html',
            controller: 'addLocationCtrl'
        }).when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        }).when('/signIn', {
            	templateUrl: 'partials/SignIn.html',
            	controller: 'createAccountCtrl'
            			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);

