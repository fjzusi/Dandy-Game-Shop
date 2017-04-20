app.service("gamesService", ['$http', '$filter', gamesService])

function gamesService($http, $filter) {
	this.getAllGames = function() {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				return $filter('orderBy')(response.data, 'title');
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