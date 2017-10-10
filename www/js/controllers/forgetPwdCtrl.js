BraveHeartMinute.controller('forgetPwdCtrl', function($scope,$state,loginService, $stateParams) {

    $scope.loginPage = function(){
        $state.go('app.login');
    };

    $scope.email = '';

    $scope.newPwd = function () {
        if($scope.email == ''||$scope.email == undefined){
            alert('Please fill the email address');
            return;
        }
        loginService.forgetPwd($scope.email).then(function(res){
            console.log("res",JSON.stringify(res));

        })
    };
});