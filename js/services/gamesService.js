app.service("gamesService", ['$rootScope', '$http', '$filter', gamesService])

function gamesService($rootScope, $http, $filter) {
	$rootScope.searchTerm = "";

	this.getAllGames = function() {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				return $filter('orderBy')(response.data, 'title');
			});
	}

	this.setSearchTerm = function(searchTerm) {
		$rootScope.searchTerm = searchTerm;
	}

	this.searchGames = function() {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				var data = response.data;

				if($rootScope.searchTerm != "") {
					var searchObj = { title:$rootScope.searchTerm };
					data = $filter('filter')(data, searchObj);
				}

				return $filter('orderBy')(data, 'title');
			});
	}

	this.getTopSellers = function(num) {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				var topSellers = [];
				for(var i = 0; i < response.data.length; i++){
					if(response.data[i].topseller) {
						topSellers.push(response.data[i]);
						if(topSellers.length >= num) {
							break;
						}
					}
				}

				return $filter('orderBy')(topSellers, 'title');
			});
	}

	this.getGameDetails = function(id) {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				var games = response.data;
				for(var i = 0; i < games.length; i++) {
					if(games[i].id == id) {
						return games[i];
					}
				}
			});
	}
}