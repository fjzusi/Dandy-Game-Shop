app.service("gamesService", ['$http', gamesService])

function gamesService($http) {
	this.getAllGames = function() {
		return $http
			.get('/Dandy-Game-Shop/data/games.json')
			.then(function (response) {
				return response.data;
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