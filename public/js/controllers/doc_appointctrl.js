angular.module('doc_appointctrl', []).controller('docapoint_controller', function($scope, $http) {

	$scope.register = function(){
		 var data = {
          firstname: $scope.disease,
          datee: $scope.date,
          doc_id: $('#option').val(),
          doc_name: $('#option')
      };

      console.log($('#option'));

      // $http.post("/regis", data).success(function(data, status) {
      //   if(status= '1'){
      //     console.log("success")
      //   }else{
      //     console.log("fail")
      //   }
      // })

	};	

  $http.get("/getalldoc").success(function(data) {
        if(data){

         $.each(data, function(key, value) {   
            $('#option').append('<option value='+value.firstname+'>'+value.firstname+'</option>');
                    
});


          // console.log(status);
          console.log(data);

        }else{
          console.log("fail")
        }
      })


});