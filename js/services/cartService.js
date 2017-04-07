app.service("cartService", ['$rootScope', 'gamesService', cartService])

function cartService($rootScope, gamesService) {
	$rootScope.cartItems = [];
	$rootScope.cartTotal = 50;
	
	this.addToCart = function(gameId, quantity) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				$rootScope.cartItems[i].quantity += quantity;
				calculateCartTotal();
				return;
			}
		}
		
		gamesService
			.getGameDetails(gameId)
			.then(function (game) {
				game.quantity = quantity;
				$rootScope.cartItems.push(game);
				calculateCartTotal();
			});
	}
	
	this.deleteFromCart = function(gameId) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				var quantity = $rootScope.cartItems[i].quantity;
				$rootScope.cartItems.splice(i, 1);
				calculateCartTotal();
				return quantity;
			}
		}
		
		return 0;
	}
	
	this.updateQuantity = function(gameId, quantity) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				$rootScope.cartItems[i].quantity = quantity;
				calculateCartTotal();
				return;
			}
		}
	}
	
	function calculateCartTotal() {
		$rootScope.cartTotal = 0;
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			var game = $rootScope.cartItems[i];
			$rootScope.cartTotal += game.price * game.quantity;
		}
	}
}