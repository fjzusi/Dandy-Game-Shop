app.controller('catalogController',
	['$scope', 'gamesService', 'cartService',
	function ($scope, gamesService, cartService) {
		$scope.games = [];
		$scope.topSellers = [];

		gamesService
			.searchGames()
			.then(function (data) {
				$scope.games = data;
			});

		gamesService
			.getTopSellers(5)
			.then(function (data) {
				$scope.topSellers = data;
			});

		$scope.addToCart = function(gameId, quantity) {
			cartService.addToCart(gameId, quantity);
		}

		$scope.carouselPrev = function() {
			$("#top-sellers-carousel").carousel("prev");
		}

		$scope.carouselNext = function() {
			$("#top-sellers-carousel").carousel("next");
		}

		$scope.$watch(
			"searchTerm",
				gamesService
					.then(function (data) {
						$scope.games = data;
					});
			}
		);
	}]
);