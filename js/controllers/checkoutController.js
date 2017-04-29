app.controller('checkoutController',
	['$scope', '$rootScope', '$location', 'cartService',
	function ($scope, $rootScope, $location, cartService) {
		cartService.addToCart(3, 1);
		cartService.addToCart(7, 2);
		cartService.addToCart(13, 1);

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