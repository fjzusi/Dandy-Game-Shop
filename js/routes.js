app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "catalog.html"
  })
  .when("/item", {
    templateUrl : "item.html"
  });
});