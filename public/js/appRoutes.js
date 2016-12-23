angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/login.html',
			controller: 'logincontroller'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'logincontroller'
		})

		.when('/register_doctor', {
			templateUrl: 'views/register_doctor.html',
			controller: 'regcontroller'	
		})
		.when('/register_patient', {
			templateUrl: 'views/register_patient.html',
			controller: 'regcontroller_patient'	
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'	
		})
		.when('/logout', {
			templateUrl: 'views/login.html',
			controller: 'logincontroller'	
		});

	$locationProvider.html5Mode(true);

}]);