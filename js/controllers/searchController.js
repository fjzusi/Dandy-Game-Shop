app.controller('searchController',
	['$scope', '$location', 'gamesService',
	function ($scope, $location, gamesService) {
		$scope.searchTerm = "";

		$scope.search = function() {
			if($location.path() != "/") {
				$location.path("/");
			}

			gamesService.setSearchTerm($scope.searchTerm);
		}
	}]
);