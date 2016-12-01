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

addressbookApp.factory('Auth', function(){
    var user;
    var loggedIn;

    return{
        setUser : function(aUser){
            user = aUser;
            loggedIn = true;
        },
        logOut : function() {
            loggedIn = false;
        },
        isLoggedIn : function(){
            if (loggedIn) {
                return user;
            } else {
                return false;
            }
        }
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
        }).when('/rate', {
                templateUrl: 'partials/rate.html',
                controller: 'rateCtrl'
        }).when('/signIn', {
            	templateUrl: 'partials/SignIn.html',
            	controller: 'createAccountCtrl'
            			}).
			otherwise({
				redirectTo: '/'
			});
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	}
]);

