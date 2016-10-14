angular
  .module('app')
  .service('HelloService', [function() {
    var service = {};

    service.sayHello = function() {
      return "Hello there!";
    }

    return service;
  }]);
