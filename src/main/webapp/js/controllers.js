'use strict';

/* Controllers */

var addressbookControllers = angular.module('addressbookControllers', ['ngMap']);

addressbookControllers.controller('HomeCtrl', ['NgMap', '$scope', 'locationService', '$location', '$http',
	function(NgMap, $scope, locationService, $location, $http) {
        $scope.allBathrooms = {};

	    //Code for api request
        $scope.getBathrooms = function() {
        			$http.get('toilets')
        			.success(function(data) {
        				console.log('data = ' , data[0].address);
        				$scope.allBathrooms = data;
						console.log($scope.allBathrooms);
        			})
        			.error(function(data) {
                        console.log("error!!");
        				console.error('error: data = ' , data);
        			});
        		};
		$scope.getBathrooms();

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
			if (document.getElementById("nav-icon3").className == "ng-scope"){
				document.getElementById("nav-icon3").className = "open";
				$scope.menuVisible = true;
			} else {
				document.getElementById("nav-icon3").className = "ng-scope";
				$scope.menuVisible = false;
			}
		};

		//code to swith url to add location
		$scope.switchToAddLocation = function() {
			locationService.set({"lat": vm.map.getCenter().lat().toString(), "lng" : vm.map.getCenter().lng().toString(),
			"zoom" : vm.map.getZoom()});
			$location.path("addLocation")
		};
	}
]);

addressbookControllers.controller('loginCtrl', [
	function() {
	}
]);

addressbookControllers.controller('createAccountCtrl',['$rootScope', '$http', '$location', '$route', '$scope',
    function($rootScope, $http, $location, $route, $scope) {
		jQuery('.form').find('input, textarea').on('keyup blur focus', function (e) {

			var jQuerythis = jQuery(this),
				label = jQuerythis.prev('label');

			if (e.type === 'keyup') {
				if (jQuerythis.val() === '') {
					label.removeClass('active highlight');
				} else {
					label.addClass('active highlight');
				}
			} else if (e.type === 'blur') {
				if( jQuerythis.val() === '' ) {
					label.removeClass('active highlight');
				} else {
					label.removeClass('highlight');
				}
			} else if (e.type === 'focus') {

				if( jQuerythis.val() === '' ) {
					label.removeClass('highlight');
				}
				else if( jQuerythis.val() !== '' ) {
					label.addClass('highlight');
				}
			}

		});

		jQuery('.tab a').on('click', function (e) {

			e.preventDefault();

			jQuery(this).parent().addClass('active');
			jQuery(this).parent().siblings().removeClass('active');

			var target = jQuery(this).attr('href');

			jQuery('.tab-content > div').not(target).hide();

			jQuery(target).fadeIn(600);

		});
		//----------------- LOGIN PART START ---------------------

		$scope.tab = function(route) {
			return $route.current && route === $route.current.controller;
		};

		var authenticate = function(credentials, callback) {

			var headers = credentials ? {
				authorization : "Basic "
				+ btoa(credentials.username + ":"
					+ credentials.password)
			} : {};

			$http.get('user', {
				headers : headers
			}).then(function(response) {
				if (response.data.name) {
					$rootScope.authenticated = true;
				} else {
					$rootScope.authenticated = false;
				}
				callback && callback($rootScope.authenticated);
			}, function() {
				$rootScope.authenticated = false;
				callback && callback(false);
			});

		};

		authenticate();

		$scope.credentials = {};
		$scope.login = function() {
			console.log("pressed login!");
			authenticate($scope.credentials, function(authenticated) {
				if (authenticated) {
					console.log("Login succeeded")
					$location.path("/");
					$scope.error = false;
					$rootScope.authenticated = true;
				} else {
					console.log("Login failed")
					$location.path("/login");
					$scope.error = true;
					$rootScope.authenticated = false;
				}
			})
		};

		$scope.logout = function() {
			$http.post('logout', {}).finally(function() {
				$rootScope.authenticated = false;
				$location.path("/");
			});
		};
		//---------------------- LOGIN PART END ----------------------
    }
 ]);



addressbookControllers.controller('addLocationCtrl', ['$scope', 'locationService', 'NgMap','$location', '$http',
	function($scope, locationService, NgMap, $location, $http) {

		$scope.allBathrooms = {};

		//Code for api request
		$scope.getBathrooms = function() {
			$http.get('toilets')
				.success(function(data) {
					console.log('data = ' , data[0].address);
					$scope.allBathrooms = data;
					console.log($scope.allBathrooms);
				})
				.error(function(data) {
					console.log("error!!");
					console.error('error: data = ' , data);
				});
		};
		$scope.getBathrooms();

		//Code for google maps api
		var vm = this;
		vm.types = "['establishment']";
		vm.placeChanged = function() {
			vm.place = this.getPlace();
			vm.map.setCenter(vm.place.geometry.location);
		};
		NgMap.getMap().then(function(map) {
			vm.map = map;
			console.log(vm.map);
		});

        $scope.location = locationService.get();

		$scope.checkIfLocationContainsCoordinates = function() {
			if ($scope.location.lat == null) {
				// Try HTML5 geolocation.
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function(position) {
						$scope.location.lat = position.coords.latitude;
						$scope.location.lng = position.coords.longitude;
						$scope.location.zoom = 18;
					});
				} else {
					$scope.location.lat = 59.395896;
					$scope.location.lng = 24.671332;
					$scope.location.zoom = 18;
				}
			}
		};
		$scope.checkIfLocationContainsCoordinates();

		$scope.switchToHome = function() {
        			$location.path("home")
        		};

		$scope.currentCenterLocation = {"lat": $scope.location.lat, "lng" : $scope.location.lng};

		$scope.selectedAddress = "No addresses selected";

        $scope.getAddressFromCenterLocation = function() {
            $scope.currentCenterLocation = {"lat": vm.map.getCenter().lat().toString(), "lng" : vm.map.getCenter().lng().toString()};
            console.log($scope.currentCenterLocation.lat);
			console.log($scope.currentCenterLocation.lng);
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ $scope.currentCenterLocation.lat
                + ',' + $scope.currentCenterLocation.lng + '&key=AIzaSyDrXw9BwblAbmcwuljHC-4hhzDvyiW3xsE').then(function(response) {
                $scope.selectedAddress = response.data.results[0].formatted_address;
            });
        };

        $scope.addLocation = function() {
			$http.post('addToilet',
				{
					"lat": $scope.currentCenterLocation.lat,
					"lng": $scope.currentCenterLocation.lng,
					"address": $scope.selectedAddress
			})
				.success(function(data) {
					console.log("toilet added");
				})
				.error(function(data) {
					console.log("error!!");
					console.error('error: data = ' , data);
				});
		}

}]).directive('myTouchstart', [function() {
	return function(scope, element, attr) {
		element.on('touchstart', function(event) {
			scope.$apply(function() {
				scope.$eval(attr.myTouchstart);
			});
		});
	};
}]).directive('myTouchend', [function() {
	return function(scope, element, attr) {
		element.on('touchend', function(event) {
			scope.$apply(function() {
				scope.$eval(attr.myTouchend);
			});
		});
	};
}]);

