app.controller('cartController',
	['$scope', 'cartService',
	function ($scope, cartService) {
		$scope.cartOpen = false;
		$scope.cartEmpty = false;
		$scope.lastDelete = {};
		$scope.hasLastDelete = false;
		
		$scope.toggleCart = function() {
			$scope.cartOpen = !$scope.cartOpen;
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