angular.module('MainCtrl', ['ui.bootstrap','ui.calendar']).controller('MainController', function($scope,$location,$localStorage,uiCalendarConfig) {

	





 var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: '12/27/2016'}
      
    ];
    /* event source that calls a function on every view switch */
   
   
   

    
    /* event sources array*/
    $scope.eventSources = [$scope.events];
    // $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

 $scope.uiConfig = {
        calendar: {
            height: 450,
            editable: true,
            displayEventTime: false,
            header: {
                left: 'month basicWeek basicDay agendaWeek agendaDay',
                center: 'title',
                right:'today prev,next'
            },
            eventClick: function (event) {
                $scope.SelectedEvent = event;
            },
            eventAfterAllRender: function () {
                if ($scope.events.length > 0 && isFirstTime) {
                    //Focus first event
                    uiCalendarConfig.calendars.myCalendar.fullCalendar('gotoDate', $scope.events[0].start);
                    isFirstTime = false;
                }
            }
        }
    };










	$scope.logout= function(){
		$localStorage.$reset();
		$location.path('/login');
	}

});