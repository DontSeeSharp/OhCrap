'use strict';

/* Controllers */

var addressbookControllers = angular.module('addressbookControllers', ['ngMap']);

addressbookControllers.controller('HomeCtrl', ['NgMap', '$scope', 'locationService', '$location',
	function(NgMap, $scope, locationService, $location) {
        $scope.allBathrooms = {};

	    //Code for api request
        $scope.getBathrooms = function() {
        			$http.get('api/bathrooms/')
        			.success(function(data) {
        				console.log('data = ' , data);
        				$scope.allBathrooms = data;
        			})
        			.error(function(data) {
        				console.error('error: data = ' , data);
        			});
        		};
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
		};

		$scope.count = function() {
			console.log("success!!");
			console.log(vm.map.getCenter());
		}
	}
]);

addressbookControllers.controller('MenuCtrl', ['$scope',
	function($scope) {
		$scope.test = "success!";
	}
]);

addressbookControllers.controller('addLocationCtrl', ['$scope', 'locationService', 'NgMap', '$http',
	function($scope, locationService, NgMap, $http) {

        $scope.location = locationService.get();
		var vm = this;

        $scope.currentCenterLocation = {"lat": $scope.location.lat, "lng" : $scope.location.lng};


		NgMap.getMap().then(function(map) {
			vm.map = map;
		});

        $scope.getCurrentCenterLocation = function() {
            $scope.currentCenterLocation = {"lat": vm.map.getCenter().lat().toString(), "lng" : vm.map.getCenter().lng().toString()};
            console.log($scope.currentCenterLocation.lat);
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ $scope.currentCenterLocation.lat
                + ',' + $scope.currentCenterLocation.lng + '&key=AIzaSyDrXw9BwblAbmcwuljHC-4hhzDvyiW3xsE').then(function(response) {
                console.log(response.data.results[0].formatted_address);
            });
        };


	}
]);

