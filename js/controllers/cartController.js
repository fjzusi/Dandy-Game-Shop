app.controller('cartController',
	['$scope', '$rootScope', 'cartService',
	function ($scope, $rootScope, cartService) {
		$scope.lastDelete = {};
		$scope.hasLastDelete = false;
		$scope.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		
		$scope.toggleCart = function() {
			$rootScope.cartOpen = !$rootScope.cartOpen;
			$scope.lastDelete = {};
			$scope.hasLastDelete = false;
		}
		
		$scope.deleteFromCart = function(gameId) {
			var quantity = cartService.deleteFromCart(gameId);
			if(quantity > 0) {
				$scope.lastDelete.id = gameId;
				$scope.lastDelete.quantity = quantity;
				$scope.hasLastDelete = true;
			}
		}
		
		$scope.updateQuantity = function(gameId, quantity) {
			cartService.updateQuantity(gameId, quantity);
		}
		
		$scope.undoDelete = function() {
			if($scope.hasLastDelete) {
				cartService.addToCart($scope.lastDelete.id, $scope.lastDelete.quantity);
				$scope.lastDelete = {};
				$scope.hasLastDelete = false;
			}
		}
	}]
);