angular.module('doc_appointctrl', []).controller('docapoint_controller', function($scope, $http) {

	$scope.register = function(){
		 var data = {
          firstname: $scope.disease,
          address: $scope.date,
          datee: $('#option').val()
      };

      console.log(data);

      // $http.post("/regis", data).success(function(data, status) {
      //   if(status= '1'){
      //     console.log("success")
      //   }else{
      //     console.log("fail")
      //   }
      // })

	};	

  $http.get("/getalldoc").success(function(err, status,data) {
        if(status){
          console.log(status);
          console.log(data);
          
        }else{
          console.log("fail")
        }
      })


});