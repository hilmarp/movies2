var movieApp = angular.module('movieApp', ['ngRoute']);

movieApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'ListController',
			templateUrl: 'partials/list.html'
		})
		.when('/:movieId', {
			controller: 'DetailsController',
			templateUrl: 'partials/details.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});