angular.module('MainCtrl', ['ui.bootstrap','ui.calendar']).controller('MainController', function($scope,$location,$localStorage,$compile,uiCalendarConfig) {

	$scope.events = [
      {title: 'All Day Event',start : 'Tue Dec 27 2016 14:26:34 GMT+0500'}
      
    ];
	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});