angular.module('regCtrl', []).controller('regcontroller', function($scope, $http) {

  $interval(function () {
        if( $location.path()=="/register_doctor"){
          if($localStorage.data){
            $location.path('/home');
          }
          // $location.path('/home');  
      }else{ }
  }, 100);

	$scope.register = function(){
		 var data = {
          firstname: $scope.firstname,
          address: $scope.address,
          email: $scope.email,
          degree: $scope.degree,
          job: $scope.job,
          number: $scope.number,
          lastname: $scope.lastname,
          pass : $scope.pass
      };

      $http.post("/regis", data).success(function(data, status) {
        if(status= '1'){
          console.log("success")
        }else{
          console.log("fail")
        }
      })

	};	

});