ohcrapControllers.controller('HomeCtrl', ['NgMap', '$scope', 'locationService', '$location', '$http', '$window',
    function(NgMap, $scope, locationService, $location, $http, $window) {
        $scope.userAuthenticated = $window.sessionStorage.getItem("loggedIn");
        $scope.status;
        if ($scope.userAuthenticated == null || $scope.userAuthenticated == "false") {
            $scope.userAuthenticated = false;
        } else if($scope.userAuthenticated == "true") {
            $scope.userAuthenticated = true;
        } else {
            $scope.userAuthenticated = false;
        }

        $scope.allBathrooms = {};

        //Code for api request
        $scope.getBathrooms = function() {
            $http.get('toilets')
                .success(function(data) {
                    $scope.allBathrooms = data;
                    $scope.status = "success";
                })
                .error(function(data) {
                    $scope.status = "fail";
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
                $window.sessionStorage["loggedIn"] = false;
                $window.location.reload();
            });
        };
        $scope.signIn = function() {
            $location.path("/signIn");
        };
        $scope.rating = "";
        $scope.showToiletInfo = function(event, toilet) {
            $scope.selectedLocation = toilet;
            $scope.rating = toilet.rating;
            console.log($scope.rating);
            $scope.map.showInfoWindow('myInfoWindow', this);
        };

        $scope.getStars = function(rating) {
            // Get the value
            var val = parseFloat(rating);
            // Turn value into number/100
            var size = val/5*100;
            return size + '%';
        }
    }
]);