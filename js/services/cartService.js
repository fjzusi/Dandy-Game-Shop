app.service("cartService", ['$rootScope', 'gamesService', cartService])

function cartService($rootScope, gamesService) {
	$rootScope.cartItems = [];
	$rootScope.cartEmpty = true;
	$rootScope.cartOpen = false;
	$rootScope.cartQuantity = 0;
	$rootScope.cartTotal = 0;

	this.addToCart = function(gameId, quantity) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				if($rootScope.cartItems[i].quantity + quantity > 10) {
					return;
				}
				$rootScope.cartItems[i].quantity += quantity;
				calculateCartTotals();
				return;
			}
		}

		gamesService
			.getGameDetails(gameId)
			.then(function (game) {
				game.quantity = quantity;
				$rootScope.cartItems.push(game);
				calculateCartTotals();
			});
	}

	this.deleteFromCart = function(gameId) {
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				var quantity = $rootScope.cartItems[i].quantity;
				$rootScope.cartItems.splice(i, 1);
				calculateCartTotals();
				return quantity;
			}
		}

		return 0;
	}

	this.updateQuantity = function(gameId, quantity) {
		if(quantity > 10) {
			return;
		}

		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			if($rootScope.cartItems[i].id == gameId) {
				$rootScope.cartItems[i].quantity = quantity;
				calculateCartTotals();
				return;
			}
		}
	}

	this.emptyCart = function() {
		$rootScope.cartItems = [];
		$rootScope.cartEmpty = true;
		$rootScope.cartOpen = false;
		$rootScope.cartQuantity = 0;
		$rootScope.cartTotal = 0;
	}

	function calculateCartTotals() {
		$rootScope.cartTotal = 0;
		$rootScope.cartQuantity = 0;
		for(var i = 0; i < $rootScope.cartItems.length; i++) {
			var game = $rootScope.cartItems[i];
			$rootScope.cartQuantity += game.quantity;
			$rootScope.cartTotal += game.price * game.quantity;
		}

		$rootScope.cartEmpty = $rootScope.cartItems.length == 0;
		if($rootScope.cartEmpty) {
			$rootScope.cartOpen = false;
		}
	}
}