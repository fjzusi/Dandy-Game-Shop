var app = angular.module('myApp', []);

app.controller("myCtrl", function($scope) {
	$scope.firstName = "Lord";
	$scope.lastName = "Joe";
	
	$scope.myColor = "blue";
});

app.directive("myShoppingCart", function() {
	return {
		template: "<select><option>1</option><option>2</option></select>"
	}
});

app.config([
	'$interpolateProvider', function($interpolateProvider) {
		return $interpolateProvider.startSymbol('{(').endSymbol(')}');
	}
]);