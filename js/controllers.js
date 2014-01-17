var myApp = angular.module('controllers', []);
myApp.controller('navigation', function ($scope){
	$scope.menu = ["home","personal", "clientes", "Control de Mesas", "reservaciones", "calendario", "estadisticas"];
	$scope.sel = 0;
	$scope.setSel = function(val){
		$scope.sel =  val;
	}
});
myApp.controller('container', function($scope){
	$scope.msg = "hola";
	$scope.a = "bien desde aca";
});
myApp.controller('clientes', ['$scope', 'resClientes', function($scope, resClientes){
	$scope.datos = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Email', 'Telefono', 'Fecha de Naciiento'];
	$scope.clientes = resClientes.query();
	$scope.sel = 0;
	$scope.setSel = function(val){
		$scope.sel = val;
	}
}]);