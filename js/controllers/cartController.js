app.controller('cartController',
	['$scope', '$rootScope',
	function ($scope, $rootScope) {
		$scope.cartOpen = false;
		$scope.cartEmpty = false;
		
		var cartWrapper = $('.cd-cart-container');
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
		var cartCount = cartTrigger.children('.count')
		var addToCartBtn = $('.cd-add-to-cart');
		var undo = cartWrapper.find('.undo');
		var undoTimeoutId;
		
		$scope.toggleCart = function() {
			$scope.cartOpen = !$scope.cartOpen;
			/*var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;

			if( cartIsOpen ) {
				cartWrapper.removeClass('cart-open');
				//reset undo
				clearInterval(undoTimeoutId);
				undo.removeClass('visible');
				cartList.find('.deleted').remove();

				setTimeout(function(){
					cartBody.scrollTop(0);
					//check if cart empty to hide it
					if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
				}, 500);
			} else {
				cartWrapper.addClass('cart-open');
			}
			*/
		}
	}]
);