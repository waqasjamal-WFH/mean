angular.module('doc_appointctrl', []).controller('docapoint_controller', function($scope, $http,$localStorage) {

	$scope.register = function(){
		 var data = {
          patient_id : $localStorage.data._id,
          disease: $scope.disease,
          datee: $scope.date,
          doc_id: $('#option').val(),
          doc_name: $('#option option:selected').text(),
          statuss : 0
      };

      console.log($localStorage.data._id);
      console.log(data);

      $http.post("/add_appoinment", data).success(function(status) {
        if(status= '1'){
          console.log("success");
          console.log(data);
        }else{
          console.log("fail")
        }
      })
	};	

  $http.get("/getalldoc").success(function(data) {
        if(data){

         $.each(data, function(key, value) {   
            $('#option').append('<option value='+value._id+'>'+value.firstname+'</option>');
          });
        }else{
          $('#option').append('<option></option>');
        }
      })


});