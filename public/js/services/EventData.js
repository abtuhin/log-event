
eventsApp.factory('EventData', function($http, $q, $routeParams){
	return {

		getAllEvents: function(){
			var deffered = $q.defer();

			$http({method: 'GET', url: 'data/1.json'}).
				then(function(data, status, headers, config){
					deffered.resolve(data.data);
				});
				
			return deffered.promise;

			// return $http.get('data/1.json');
		}
		,

		getEvent: function(){
			var deffered = $q.defer();

			$http({method: 'GET', url: 'data/1.json'}).
				then(function(data, status, headers, config){
					deffered.resolve(data.data[$routeParams.id]);
				});
				
			return deffered.promise;
		}
	};
});