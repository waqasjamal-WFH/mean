angular.module('doc_appointctrl', []).controller('docapoint_controller', function($scope, $http) {

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