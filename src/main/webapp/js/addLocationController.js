ohcrapControllers.controller('addLocationCtrl', ['$scope', '$modal', 'locationService', 'NgMap','$location', '$http',
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
                windowClass: 'add-location-pop-up'
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

        $scope.selectedAddress = "No addresses selected";

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