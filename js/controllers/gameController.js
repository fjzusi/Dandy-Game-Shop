app.controller('gameController',
	['$scope', '$routeParams', 'gamesService',
	function ($scope, $routeParams, gamesService) {
		var id = $routeParams.id;
		
		gamesService
			.getGameDetails(id)
			.then(function (data) {
				$scope.id = data.id;
				$scope.title = data.title;
				$scope.subtitle = data.subTitle;
				$scope.price = data.price;
			});	
	}]
);