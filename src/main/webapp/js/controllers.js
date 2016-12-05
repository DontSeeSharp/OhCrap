'use strict';

/* Controllers */

var addressbookControllers = angular.module('addressbookControllers', ['ngMap', 'ui.bootstrap']);



addressbookControllers.controller('HomeCtrl', ['NgMap', '$scope', 'locationService', '$location', '$http', '$window',
	function(NgMap, $scope, locationService, $location, $http, $window) {
        $scope.userAuthenticated = $window.sessionStorage.getItem("loggedIn");
        if ($window.sessionStorage.getItem("loggedIn") == null) {
            console.log("null");
            $scope.userAuthenticated = false;
        } else {
            console.log("else");
            console.log($window.sessionStorage.getItem("loggedIn"));
            console.log($scope.userAuthenticated);
        }


        $scope.allBathrooms = {};
		$scope.test =
	    //Code for api request
        $scope.getBathrooms = function() {
        			$http.get('toilets')
        			.success(function(data) {
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

		/*Get nearest location*/
		$scope.getNearestLocation = function() {
			showLoading();
			$http.post('getNearestLocation', {
				"lat" : vm.map.getCenter().lat(),
				"lng" : vm.map.getCenter().lng()
			}).then(function (response) {
				if (response.data.result == "success") {
					$window.open("https://www.google.ee/maps?saddr=My+Location&daddr=" + response.data.lat + "," + response.data.lng,"_blank");
					showPage();
				} else {
					console.log("failed to retrieve closest location.");
				}
			});
		};

		//code to swith url to add location
		$scope.switchToAddLocation = function() {
			locationService.set({"lat": vm.map.getCenter().lat().toString(), "lng" : vm.map.getCenter().lng().toString(),
			"zoom" : vm.map.getZoom()});
			$location.path("/addLocation")
		};

		$scope.logout = function() {
			$http.post('logout', {}).finally(function() {
                $window.sessionStorage.setItem("loggedIn", false);
                $scope.userAuthenticated = false;
                $scope.$digest();
			});
		};
        $scope.signIn = function() {
            $location.path("/signIn");
        };
	}
]);

addressbookControllers.controller('loginCtrl', [
	function() {
	}
]);

addressbookControllers.controller('createAccountCtrl',['$http', '$location', '$route', '$scope', '$window',
    function($http, $location, $route, $scope, $window) {

        $scope.textAlert = "Some content";
        $scope.successTextAlert = "Some content";
        $scope.showSuccessAlert = true;
        $scope.showFailAlert = true;
        // switch flag
        $scope.switchSuccess = function() {
            $scope.showSuccessAlert = !$scope.showSuccessAlert;
        };
        $scope.switchFail = function() {
            $scope.showFailAlert = !$scope.showFailAlert;
        };

		jQuery('.form').find('input, textarea').on('keyup change blur focus', function (e) {

			var jQuerythis = jQuery(this),
				label = jQuerythis.prev('label');

			if (e.type === 'change') {
				e.type = 'keyup';
			}
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
                    $scope.authenticated = true;
				} else {
                    $scope.authenticated = false
				}
                callback && callback($scope.authenticated);
            }, function() {
				$scope.authenticated = false;
                callback && callback(false);
			});

		};

		authenticate();

		$scope.credentials = {};
		$scope.login = function() {
            showLoading();
			console.log("pressed login!");
			authenticate($scope.credentials, function(authenticated) {
				if (authenticated) {
                    $scope.error = false;
					console.log("Login succeeded");
					$window.location.reload();
                    $window.sessionStorage.setItem("loggedIn", true);
					$location.path("/");
                    showPage();
				} else {
					console.log("Login failed");
                    showPage();
					$scope.error = true;
                    $window.sessionStorage.setItem("loggedIn", false);
				}
			})
		};

		//---------------------- LOGIN PART END ----------------------

		//------------------------CREATE ACC PART START---------------
		    $scope.submitAccount = function() {
						showLoading();
            			$http.post('createUser',
            				{
            					"username": $scope.username,
            					"password": $scope.password
            			})
            				.success(function(data) {
                                if (data.result == "0") {
                                    showPage();
                                    console.log("user created");
                                    $scope.successTextAlert = "User created!";
                                    $scope.switchSuccess();
                                } else if (data.result == "-1") {
                                    showPage();
                                    $scope.textAlert = "Username already exists!";
                                    $scope.switchFail();
                                }

            				})
            				.error(function(data) {
								console.log("error = " , data);
            				});
            		}

		 }

		//------------------------CREATE ACC PART END---------------

 ]);

addressbookControllers.controller('rateCtrl', ['$scope', '$modalInstance', 'NgMap','$location', '$http',
	function($scope, $modalInstance, NgMap, $location, $http) {
	$scope.data = {};
	$scope.submitRatingInfo = function() {
	    if($scope.data.cost == undefined || $scope.data.rating == undefined) {
	    alert("Please select both boxes!")
	    return
	    }
        $modalInstance.close($scope.data);

        }
	}]);



addressbookControllers.controller('addLocationCtrl', ['$scope', '$modal', 'locationService', 'NgMap','$location', '$http',
	function($scope, $modal, locationService, NgMap, $location, $http) {
        $scope.rating;
        $scope.cost;
		$scope.allBathrooms = {};

		//Code for api request
		$scope.getBathrooms = function() {
			$http.get('toilets')
				.success(function(data) {
					$scope.allBathrooms = data;
					console.log($scope.allBathrooms);
				})
				.error(function(data) {
					console.log("error!!");
					console.error('error: data = ' , data);
				});
		};
		$scope.getBathrooms();

	    $scope.clickMeModal = function(){
              return $modal.open({
        				templateUrl: 'partials/rate.html',
        				controller : 'rateCtrl',
        			});

              };

		//Code for google maps api
		var vm = this;
		var geocoder = new google.maps.Geocoder();
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

		$scope.selectedAddress = "No addresses selectedd";

        $scope.getAddressFromCenterLocation = function() {
			$scope.currentCenterLocation.lat = vm.map.getCenter().lat().toString();
			$scope.currentCenterLocation.lng = vm.map.getCenter().lng().toString();
			var latlng = {lat: vm.map.getCenter().lat(), lng: vm.map.getCenter().lng()};
			geocoder.geocode({'location': latlng}, function(results, status) {
				if (status === 'OK') {
					if (results[0]) {
						$scope.$apply(function () {
							$scope.currentCenterLocation.lat = vm.map.getCenter().lat().toString();
							$scope.currentCenterLocation.lng = vm.map.getCenter().lng().toString();
							$scope.selectedAddress = results[0].formatted_address;
							console.log($scope.selectedAddress);
						});

					} else {
						window.alert('No results found');
					}
				} else {
					//window.alert('Geocoder failed due to: ' + status);
					$scope.textAlert = "Don't switch location so often!";
					$scope.switchFail()
				}
			});
        };

		$scope.textAlert = "Some content";
        $scope.successTextAlert = "Some content";
        $scope.showSuccessAlert = true;
        $scope.showFailAlert = true;
		// switch flag
		$scope.switchSuccess = function() {
			$scope.showSuccessAlert = !$scope.showSuccessAlert;
		};
		$scope.switchFail = function() {
			$scope.showFailAlert = !$scope.showFailAlert;
		};

        $scope.addLocation = function() {
            console.log($scope.cost);
            var modalInstance = $scope.clickMeModal();
            modalInstance.result.then(function(data) {
                showLoading();
                console.log("Siit tuleb data");

                $scope.cost = data.cost;
                $scope.rating = data.rating;


                $http.post('addToilet',
                    {
                        "lat": $scope.currentCenterLocation.lat,
                        "lng": $scope.currentCenterLocation.lng,
                        "address": $scope.selectedAddress,
                        "free": $scope.cost,
                        "rating": $scope.rating
                })
                    .success(function(response) {
                        showPage();
                        if (response.result == "Location successfully added to database!") {
                            $scope.successTextAlert = response.result;
                            $scope.switchSuccess();
                        } else {
                            $scope.textAlert = response.result;
                            $scope.switchFail()
                        }
                    })
                    .error(function(data) {
                        showPage();
                        console.log("error!!");
                        console.error('error: data = ' , data);
                    });

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
}])
.factory('responseObserver', function responseObserver($q, $location, $window) {
       return {
           'responseError': function(errorResponse) {
               switch (errorResponse.status) {
               case 401:
                   $window.location = "#/login";
                   break;
               case 500:
                   $window.location = './500.html';
                   break;
               }
               return $q.reject(errorResponse);
           }
       };
   }).config(function ($httpProvider) {
         $httpProvider.interceptors.push('responseObserver');

     });

