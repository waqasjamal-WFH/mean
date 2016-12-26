angular.module('sampleApp', ['doc_appointctrl','ui.bootstrap','ui.calendar','ngRoute', 'appRoutes', 'MainCtrl', 'loginCtrl', 'NerdService', 'regCtrl_patient','regCtrl', 'GeekService'])
.run(function($http,$location,$interval,$localStorage) {

  $interval(function () {
      if(!$localStorage.data){
        $location.path('/login');
        // console.log($localStorage.data._id);
      }else{
        // $location.path('/login');
      }
  }, 100);

});