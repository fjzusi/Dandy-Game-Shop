app.controller('gameController',
	['$scope', '$routeParams', 'gamesService', 'cartService',
	function ($scope, $routeParams, gamesService, cartService) {
		var id = $routeParams.id;
		$scope.game = {};

		gamesService
			.getGameDetails(id)
			.then(function (data) {
				$scope.game = data;
			});

		$scope.addToCart = function(gameId, quantity) {
			cartService.addToCart(gameId, quantity);
		}
	}]
);