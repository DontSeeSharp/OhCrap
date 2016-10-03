'use strict';

/* App Module */

var addressbookApp = angular.module('addressbookApp', [
	'ngRoute',
	'addressbookControllers'
]);

addressbookApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', { 
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl as vm'
			}).
			when('/addLocation', {
				templateUrl: 'partials/addLocation.html',
				controller: 'AddLocationCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}
]);
