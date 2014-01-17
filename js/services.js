var res = angular.module('resources', ['ngResource']);
res.factory('resClientes', function ($resource) {
	return $resource(
		'http://localhost:4567/clientes/:id',
		{id: '@id'},
		{}
	);
});