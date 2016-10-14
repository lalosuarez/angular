var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
    })
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
  		  redirectTo: '/'
  	});
});

app.controller('MainCtrl', ['$scope', '$location', function($scope) {
    $scope.title = "Main content";
}]);

app.controller('LoginCtrl', ['$scope', function($scope) {
    $scope.title = "Login";
}]);
