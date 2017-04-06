app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/catalog.html"
  })
  .when("/item/:id", {
    templateUrl : "views/game.html"
  }).when("/checkout", {
    templateUrl : "views/checkout.html"
  });
});