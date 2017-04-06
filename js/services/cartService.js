app.service("cartService", ['$rootScope', 'gamesService', cartService])

function cartService($rootScope, gamesService) {
	$rootScope.cartItems = [];
	
	this.addToCart = function(gameId, quantity) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				$rootScope.cartItems[i].quantity += quantity;
				return;
			}
		}
		
		var game = gamesService.getGameDetails(gameId);
		game.quantity = quantity;
		$rootScope.cartItems.push(game);
	}
	
	this.deleteFromCart = function(gameId) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				var quantity = $rootScope.cartItems[i].quantity;
				$rootScope.cartItems.splice(i, 1);
				return quantity;
			}
		}
		
		return 0;
	}
	
	this.updateQuantity = function(gameId, quantity) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				$rootScope.cartItems[i].quantity = quantity;
				return;
			}
		}
	}
}