angular.module('MainCtrl', ['ui.calendar']).controller('MainController', function($interval,$scope,$location,$localStorage,$compile,uiCalendarConfig) {

	



	$interval(function () {
	      if(!$localStorage.data){
	        // $location.path('/home');
	        console.log($location.absUrl());
	      
	      }else{ }
	}, 100);

 





	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});