app.controller('checkoutController',
	['$scope', '$rootScope', '$location', 'cartService',
	function ($scope, $rootScope, $location, cartService) {

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