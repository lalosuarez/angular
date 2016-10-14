angular
  .module('app')
  .controller('MainCtrl', ['$scope', '$location', function($scope) {
    $scope.title = "Main content";
  }]);
