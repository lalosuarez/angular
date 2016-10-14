angular
  .module('app', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    })
    .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
  		  redirectTo: '/'
  });
});
