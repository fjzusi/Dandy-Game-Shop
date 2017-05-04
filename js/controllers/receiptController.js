app.controller('receiptController',
	['$scope', 'cartService',
	function ($scope, cartService) {
        cartService.emptyCart();
	}]
);