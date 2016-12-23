angular.module('MainCtrl', []).controller('MainController', function($scope,$location,$localStorage) {

	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});