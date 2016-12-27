angular.module('sampleApp', ['doc_appointctrl','ngRoute', 'appRoutes', 'MainCtrl', 'loginCtrl', 'NerdService', 'regCtrl_patient','regCtrl', 'GeekService'])
.run(function($http,$location,$interval,$localStorage) {

  $interval(function () {
      if(!$localStorage.data || $location.path('/login')){
        $location.path('/login');
        // console.log($localStorage.data._id);
      }else if(!$localStorage.data || $location.path('/register_doctor')){
        $location.path('/register_doctor');
      }else if(!$localStorage.data || $location.path('/register_patient')){
        $location.path('/register_patient');
      }else{$location.path('/home');}
  }, 100);

});