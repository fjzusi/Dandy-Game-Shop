app.controller('gameController',
	['$scope', '$routeParams', 'gamesService', 'cartService',
	function ($scope, $routeParams, gamesService, cartService) {
		var id = $routeParams.id;
		
		gamesService
			.getGameDetails(id)
			.then(function (data) {
				$scope.id = data.id;
				$scope.title = data.title;
				$scope.subtitle = data.subTitle;
				$scope.price = data.price;
			});
			
		$scope.addToCart = function(gameId, quantity) {
			cartService.addToCart(gameId, quantity);
		}
	}]
);