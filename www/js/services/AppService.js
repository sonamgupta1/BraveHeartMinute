/**
 * Created by sonam on 13/8/15.
 */
BraveHeartMinute.factory('AppService',function(){


})




// BraveHeartMinute.factory('signUpService', function($http,$state,$q){
//     return {
//         register: function (param) {
//             console.log("data",param.email)
//             var deffer = $q.defer();
//             return  $http({
//                 url: "https://www.otscom.net/bhservices/public/v1/index/signup",
//                 dataType: 'json',
//                 data:param,
//                 type: "POST"
//             }).
//              success(function(data, status, headers, config) {
//
//                  console.log("success");
//                 deffer.resolve(data);
//             }).
//             error(function(data, status, headers, config) {
//                 console.log("fail",status,headers,config,data)
//             });
//             return deffer.promise;
//
//         }
//     }
// });