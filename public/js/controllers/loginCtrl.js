angular.module('loginCtrl', ['ngStorage']).controller('logincontroller', function($scope,$http,$localStorage,$location) {
	$scope.login = function(){
		var usertype=$('#option').val();
		var data = {
          email: $scope.email,
          pass : $scope.pass,
          user_type: $('#option').val()
      	};

      	if(usertype== "doctor"){
      		$http.post("/login", data).success(function(response) {
		        if(response== "0"){
		          console.log("fail")
		        }else{
		          $location.path('/home');
		          // location.href = "home.html";	
		          console.log(response);
		          $localStorage.data = response;
		          
		        }
			})
      	}else{
      		$http.post("/login_patient", data).success(function(response) {
		        if(response== "0"){
		          console.log("fail")
		        }else{
                  $location.path('/home');
                  // location.href = "home.html";
		          console.log(response);
		          $localStorage.data = response;
		          
		        }
			})
      	} 	
	};	
});