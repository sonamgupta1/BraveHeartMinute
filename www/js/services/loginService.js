BraveHeartMinute.factory('loginService', function($http,$state,$rootScope,$q){
    return {
        login: function (param) {
            console.log(param);
            console.log("data",param.email);
            $rootScope.$broadcast('loading:show');
            var deffer = $q.defer();
            return  $http({
                url: "https://www.otscom.net/bhservices/public/v1/index/signin",
                dataType: 'json',
                data:JSON.stringify(param),
                method:"POST"
            }).
            success(function(data, status, headers, config) {

                console.log("success",JSON.stringify(data.data))
                deffer.resolve(data);
                $rootScope.$broadcast('loading:hide');
            }).
            error(function(data, status, headers, config) {
                console.log("fail",status,headers,config,data)
                $rootScope.$broadcast('loading:hide');
            });
            // return deffer.promise;
        },
        register: function (param) {
            console.log("data",param.email)
            var deffer = $q.defer();
            return  $http({
                url: "https://www.otscom.net/bhservices/public/v1/index/signup",
                dataType: 'json',
                data:param,
                type: "POST"
            }).
             success(function(data, status, headers, config) {

                 console.log("success");
                deffer.resolve(data);
            }).
            error(function(data, status, headers, config) {
                console.log("fail",status,headers,config,data)
            });
            return deffer.promise;

        },
        forgetPwd:function (user_email) {
            console.log("data",param.email)
            var deffer = $q.defer();
            return  $http({
                url: "https://www.otscom.net/bhservices/public/v1/index/forgotpassword",
                dataType: 'json',
                data:{'email':user_email },
                type: "POST"
            }).
            success(function(data, status, headers, config) {

                console.log("success",JSON.stringify(data));
                deffer.resolve(data);
            }).
            error(function(data, status, headers, config) {
                console.log("fail",status,headers,config,data)
            });
            return deffer.promise;

        }
    }
});
