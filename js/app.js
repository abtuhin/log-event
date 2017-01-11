'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'ngResource']);

eventsApp.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/newEvent', {
			templateUrl: 'partials/newEvent.html',
			controller: 'EditEventController'
		})
		.when('/profile', {
			templateUrl: 'partials/EditProfile.html',
			controller: 'EditProfileController'
		})
		.when('/', {
			templateUrl:'partials/eventLists.html',
			controller: 'EventListController'

		})
		.when('/events/:id', {
			templateUrl: 'partials/eventDetails.html',
			controller: 'EventController'
			// resolve: {
			// 	event: function($q, $route, EventData){
			// 		var deffered = $q.defer();
			// 		EventData.getEvent($route.current.pathParams.id)
			// 			.then(function(event){
			// 				deffered.resolve(event);
			// 			});
			// 		console.log(deffered.promise);
			// 		return deffered.promise;

			// 	}
			// }
		})
		.otherwise({
		    redirectTo: '/'
		});

	//remove hash from URL
	$locationProvider.html5Mode(true);

})