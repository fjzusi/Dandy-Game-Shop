app.controller('searchController',
	['$scope', '$routeParams', 'gamesService',
	function ($scope, $routeParams, gamesService) {
		$scope.searchTerm = "";
		
		$scope.search = function() {
			alert($scope.searchTerm);
		}
	}]
);