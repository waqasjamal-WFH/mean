angular.module('sampleApp', ['ui.bootstrap','ui.calendar','ngRoute', 'appRoutes', 'MainCtrl', 'loginCtrl', 'NerdService', 'regCtrl_patient','regCtrl', 'GeekService'])
.run(function($http,$location,$interval,$localStorage) {

  $interval(function () {
      if($localStorage.data){
        $location.path('/home');
        // console.log($localStorage.data._id);
      }else{
        $location.path('/login');
      }
  }, 1000);

});