var app = angular.module('myApp', []);

app.controller("myCtrl", function($scope) {
	$scope.firstName = "Lord";
	$scope.lastName = "Joe";
});

app.config([
	'$interpolateProvider', function($interpolateProvider) {
		return $interpolateProvider.startSymbol('{(').endSymbol(')}');
	}
]);