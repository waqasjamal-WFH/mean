angular.module('MainCtrl', ['ui.calendar']).controller('MainController', function($scope,$location,$localStorage,$compile,uiCalendarConfig) {

	



	$interval(function () {
	      if(!$localStorage.data ){
	        $location.path('/login');
	        
	      
	      }else{ }
	}, 100);

 





	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});