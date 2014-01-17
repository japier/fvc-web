var app = angular.module('app', [
  'controllers',
  'ngRoute',
  'resources'
]);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/', {
        templateUrl: 'partials/container.html',
        controller: 'container'
      }).
      when('/clientes', {
        templateUrl: 'partials/clientes.html',
        controller: 'clientes'
      }).
      otherwise({
        template: "Not Found"
      });
  }
]);