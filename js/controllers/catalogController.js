app.controller('catalogController',
	['$scope', 'gamesService',
	function ($scope, gamesService) {
		gamesService
			.getAllGames()
			.then(function (data) {
				$scope.games = data;
			});	
	}]
);