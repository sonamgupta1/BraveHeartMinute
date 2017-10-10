BraveHeartMinute.controller('dashboardCtrl', function($scope,$state) {
    $scope.today = new Date();

    $scope.dashboard = function () {
        $state.go('app.dashboard');
    };

    $scope.activity = function () {
        $state.go('app.activity');
    };

    $scope.profile = function () {
        $state.go('app.profile');
    };
})
