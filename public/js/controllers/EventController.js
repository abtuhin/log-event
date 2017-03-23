'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, $locale, $route, EventData){

		/*ng-style directive check*/
		$scope.titleStyle = {
			'color': 'maroon',
			'font-weight': 'bolder'
			
		}
		// end ng-style

		/*localization check*/
		$scope.banglaDate = Date.now();
		$scope.bn = $locale.DATETIME_FORMATS.fullDate;
		// end local

		/* Reloading only the current page, not the entire application*/
		$scope.reload = function(){
			$route.reload();
		}
		// end $route.reload()

		$scope.sortOrder = '-upVoteCount';

		var promise = EventData.getEvent();

		promise.then(function(data){
			$scope.event = data;
		});
		
		// $scope.event = $route.current.locals.event;

		/*this is just Asynch call without promise library

		EventData.getEvent().then(function(ref){
			console.log(ref);
			$scope.event = ref.data;
		});
		*/

		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		}


});