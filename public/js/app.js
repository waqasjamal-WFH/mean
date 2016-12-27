angular.module('sampleApp', ['doc_appointctrl','ngRoute', 'appRoutes', 'MainCtrl', 'loginCtrl', 'NerdService', 'regCtrl_patient','regCtrl', 'GeekService'])
.run(function($http,$location,$interval,$localStorage,$state) {

  $interval(function () {
      if($localStorage.data ){
        $location.path('/home');
        console.log($state.current.name);
      
      }else{ }
  }, 100);

});