movieApp.controller('ListController', function ($scope, $http) {

	// Get list of movies
	$http.get('http://apis.is/cinema').success(function (data) {
		$scope.movies = data.results;
	});

});

movieApp.controller('DetailsController', function ($scope, $http, $routeParams) {

	var imdbLink;
	var imdbLinkId;
	var movieTitle;

	// Get route params index
	$scope.movieIndex = $routeParams.movieId;

	// Get list of movies
	$http.get('http://apis.is/cinema').success(function (data) {
		$scope.movies = data.results;
		imdbLink = data.results[$scope.movieIndex].imdbLink;
		movieTitle = (data.results[$scope.movieIndex].title).split(' ').join('%20');
	});

	// Get IMDB ID after async call has finished
	setTimeout(function() {
		// Get IMDB ID
		var imdbLinkSplit = imdbLink.split("/");
		imdbLinkId = imdbLinkSplit[imdbLinkSplit.length - 1];
	}, 100);

	// Delay this function
	setTimeout(function() {
		// Get movie info from open movie db
		$http.get('http://www.omdbapi.com/?i=' + imdbLinkId).success(function (data) {
			$scope.omdb = data;
		});
	}, 200);

	// Delay this function
	setTimeout(function() {
		//Remove the tt from imdbID
		var imdbIdNoTT = imdbLinkId.split("tt");
		console.log(imdbIdNoTT[imdbIdNoTT.length - 1]);
	}, 300);

});