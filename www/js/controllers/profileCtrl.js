/**
 * Created by sonam on 13/8/15.
 */
BraveHeartMinute.controller('profileCtrl', function($scope,$state, $stateParams) {
$scope.editProfile = function(){
$state.go('app.editProfile');
};

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

