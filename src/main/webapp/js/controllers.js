'use strict';

/* Controllers */

var addressbookControllers = angular.module('addressbookControllers', ['ngMap']);

addressbookControllers.controller('HomeCtrl', ['NgMap', '$scope', 'locationService', '$location',
	function(NgMap, $scope, locationService, $location) {
		//Code for google maps api
		var vm = this;
		vm.types = "['establishment']";
		vm.placeChanged = function() {
			vm.place = this.getPlace();
			vm.map.setCenter(vm.place.geometry.location);
		};
		NgMap.getMap().then(function(map) {
			vm.map = map;
		});
		//code for hamburger and menu
		$scope.menuVisible = false;
		$scope.ToggleMenu = function() {
			if (document.getElementById("nav-icon3").className == ""){
				document.getElementById("nav-icon3").className = "open";
				$scope.menuVisible = true;
			} else {
				document.getElementById("nav-icon3").className = "";
				$scope.menuVisible = false;
			}
		};
		$scope.switchToAddLocation = function() {
			locationService.set({"lat": vm.map.getCenter().lat().toString(), "lng" : vm.map.getCenter().lng().toString(),
			"zoom" : vm.map.getZoom()});
			$location.path("addLocation")
		}
	}
]);

addressbookControllers.controller('MenuCtrl', ['$scope',
	function($scope) {
		$scope.test = "success!";
	}
]);

addressbookControllers.controller('AddLocationCtrl', ['$scope', 'locationService',
	function($scope, locationService) {
		$scope.location = locationService.get();
	}
]);

