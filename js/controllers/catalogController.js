app.controller('catalogController',
	['$scope', 'gamesService', 'cartService',
	function ($scope, gamesService, cartService) {
		gamesService
			.getAllGames()
			.then(function (data) {
				$scope.games = data;
			});
		
		$scope.addToCart = function(gameId, quantity) {
			cartService.addToCart(gameId, quantity);
		}
	}]
);