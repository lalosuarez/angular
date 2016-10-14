angular
  .module('app')
  .controller('MainCtrl', ['$scope', 'HelloService', function($scope, HelloService) {
    $scope.hello = HelloService.sayHello();
  }]);
