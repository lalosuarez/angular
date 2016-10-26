angular
  .module('app')
  .service('HelloService', [function() {
    this.sayHello = function() {
      return "¡Hello there!";
    }
  }]);
