'use strict';

/* Controllers */

var addressbookControllers = angular.module('addressbookControllers', ['ngMap']);

addressbookControllers.controller('HomeCtrl', ['NgMap', '$scope',
	function(NgMap, $scope) {
		var vm = this;
		vm.types = "['establishment']";
		vm.placeChanged = function() {
			vm.place = this.getPlace();
			console.log('location', vm.place.geometry.location);
			vm.map.setCenter(vm.place.geometry.location);
		};
		NgMap.getMap().then(function(map) {
			vm.map = map;
		});
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
	}
]);

addressbookControllers.controller('MenuCtrl', ['$scope',
	function($scope) {
		$scope.test = "success!";
	}
]);

