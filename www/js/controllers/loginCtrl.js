BraveHeartMinute.controller('loginCtrl', function($scope,$state,loginService) {
  
  $scope.user = {
      email: '',
      pass: ''
    };
  
  $scope.login = function(){
     if($scope.user.email == ''||$scope.user.email == undefined){
       alert('Please fill the email address');
       return;
     }
      if($scope.user.pass == ''||$scope.user.pass == undefined){
         alert('Please fill the email address');
         return;
      }
      loginService.login($scope.user).then(function(res){
       console.log("res",JSON.stringify(res));
       if(res.status == 200){
         console.log("1");
        //  localStorage.setItem("user_id", res['userData']['user_id']);
       }
      })

    };


    $scope.signUp = function(){
     $state.go('app.signUp');
    };
    $scope.forgetPwd = function(){
        $state.go('app.forgetPwd');
    };

    
})
