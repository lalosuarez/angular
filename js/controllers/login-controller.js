angular
  .module('app')
  .controller('LoginCtrl', ['$scope',
  function($scope) {

    $scope.user = {
      "username": null,
      "password": null
    };

    $scope.login = function() {
      console.log($scope.user);
    }
  }]);
