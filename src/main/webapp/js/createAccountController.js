ohcrapControllers.controller('createAccountCtrl',['$http', '$location', '$route', '$scope', '$window',
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
                    $window.sessionStorage["loggedIn"] = false;
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