BraveHeartMinute.controller('signUpCtrl', function($scope,loginService,$state) {
   

     $scope.user = {};
    $scope.user.fname = '';
    $scope.user.lname = '';
    $scope.user.email = '';
    $scope.user.pass = '';
    $scope.user.joinedwith  = 'direct';
    $scope.signUp = function(){
        if(($scope.user.fname) && ($scope.user.lname) && ($scope.user.lname) && ($scope.user.pass) && ($scope.user.joinedwith)){
           console.log("signup data",JSON.stringify($scope.user));

            loginService.register($scope.user).then(function(res){
               console.log("res",res);
               if(res.status == 200){
                   console.log("registration successful!");
               }
           })
        }
    };

    $scope.loginPage = function(){
       $state.go('app.login');
   };
})
