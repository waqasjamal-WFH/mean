angular.module('MainCtrl', ['ui.calendar']).controller('MainController', function($interval,$scope,$location,$localStorage,$compile,uiCalendarConfig) {

	

	 var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
$scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date('Thu Oct 17 2013 09:00:00 GMT+0530 (IST)')},
      {title: 'Long Event',start: new Date('Thu Oct 17 2013 10:00:00 GMT+0530 (IST)'),end: new Date('Thu Oct 17 2013 17:00:00 GMT+0530 (IST)')},
      {id: 999,title: 'Repeating Event',start: new Date('Thu Oct 17 2013 09:00:00 GMT+0530 (IST)'),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29)}
    ];
    /* event source that calls a function on every view switch */


    /* Render Tooltip */
    $scope.eventRender = function (event, element, view) {
        element.attr({
            'tooltip': event.title,
            'tooltip-append-to-body': true
        });
        $compile(element)($scope);
    };

    /* config object */
    $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            header: {
                left: 'title',
                center: '',
                right: 'today prev,next'
            },
            eventRender: $scope.eventRender
        }   
    };
    /* event sources array*/
    $scope.eventSources = $scope.eventSource;

console.log($scope.eventSource);



	$interval(function () {
	      if( $location.path()=="/home"){
	      	if(!$localStorage.data){
	      		$location.path('/login');
	      	}
	        // $location.path('/home');  
	    }else{ }
	}, 100);

	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});