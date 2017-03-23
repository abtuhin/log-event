'use strict';

eventsApp.controller('EventListController', function EventListController($scope,$routeParams, EventData){
	var instance = EventData.getAllEvents();

	instance.then(function(data){
		$scope.events = data;
		
	});

});

