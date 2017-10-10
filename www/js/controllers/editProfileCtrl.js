BraveHeartMinute.controller('editProfileCtrl', function($scope,$state, $stateParams) {
    $scope.dashboard = function () {
        $state.go('app.dashboard');
    };

    $scope.activity = function () {
        $state.go('app.activity');
    };

    $scope.profile = function () {
        $state.go('app.profile');
    };

});