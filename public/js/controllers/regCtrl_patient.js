angular.module('regCtrl_patient', []).controller('regcontroller_patient', function($scope, $http,$localStorage,$location,$interval) {


  $interval(function () {
        if( $location.path()=="/register_patient"){
          if($localStorage.data){
            $location.path('/home');
          }
          // $location.path('/home');  
      }else{ }
  }, 100);


	$scope.register = function(){
		 var data = {
          firstname: $scope.firstname,
          lastname: $scope.lastname,
          email: $scope.email,
          disease: $scope.disease,
          username: $scope.username,
          pass : $scope.pass
      };

      $http.post("/regis_patient", data).success(function(data, status) {
        if(status= '1'){
          console.log("success")
        }else{
          console.log("fail")
        }
      })

	};	

});