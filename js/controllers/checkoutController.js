app.controller('checkoutController',
	['$scope', '$rootScope', '$location', 'cartService',
	function ($scope, $rootScope, $location, cartService) {
		$scope.total = 0;

		$scope.calculateCheckoutTotal = function() {
			$scope.total = 0;
			angular.forEach($rootScope.cartItems, function (game, key) {
				$scope.total += game.price * game.quantity;
			});
		};

		$scope.calculateCheckoutTotal();

		$scope.$watch(
			"cartEmpty",
			function onCartEmptyChange(oldValue, newValue) {
				if(oldValue) {
					$location.url("/");
				}
			}
		);
	}]
);