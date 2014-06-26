movieApp.controller('ListController', function ($scope, $http) {

	// Get list of movies
	$http.get('http://apis.is/cinema').success(function (data) {
		$scope.movies = data.results;
	})

});

movieApp.controller('DetailsController', function ($scope, $http) {

});