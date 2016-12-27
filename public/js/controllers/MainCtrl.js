angular.module('MainCtrl', ['ui.calendar']).controller('MainController', function($scope,$location,$localStorage,$compile,uiCalendarConfig) {

	





 





	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});