angular.module('MainCtrl', ['ui.calendar']).controller('MainController', function($interval,$scope,$location,$localStorage,$compile,uiCalendarConfig) {

	



	$interval(function () {
	      if( $location.path()=="/home"){
	      	if(!$localStorage.data){
	      		// $location.path('/login');
	      		console.log("asdasd");
	      	}
	        // $location.path('/home');
	        
	      
	      }else{ }
	}, 100);

 





	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});