angular.module('loginCtrl', ['ngStorage']).controller('logincontroller', function($interval,$scope,$http,$localStorage,$location) {
	$interval(function () {
	      if( $location.path()=="/login"){
	      	if($localStorage.data){
	      		$location.path('/home');
	      	}
	        // $location.path('/home');  
	    }else{ }
	}, 100);





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
		        	alert("Incorrect email or password")
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