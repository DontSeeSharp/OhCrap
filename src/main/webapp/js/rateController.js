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