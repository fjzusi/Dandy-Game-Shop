app.controller('checkoutController',
	['$scope', '$rootScope', '$location', 'cartService',
	function ($scope, $rootScope, $location, cartService) {
		$scope.total = 0;

		$scope.calculateCheckoutTotal = function() {
			$scope.total = 0;
			console.log($rootScope.cartItems);
			angular.forEach($rootScope.cartItems, function (game, key) {
				$scope.total += game.price * game.quantity;

				console.log(game);
				console.log(key);
			});
		};

		$scope.calculateCheckoutTotal();

		$scope.$watch(
			"cartEmpty",
			function onCartEmptyChange(oldValue, newValue) {
				if(oldValue) {
					//$location.url("/");
				}
			}
		);
	}]
);