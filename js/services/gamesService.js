app.service("gamesService", ['$http', gamesService])

function gamesService($http) {
	this.getAllGames = function() {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				return response.data;
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
				
				return topSellers;
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