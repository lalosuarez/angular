angular
  .module('app', [])
  .service('AppInfoService', [function() {
    this.getInfo = function() {
      return {
        "version": "1.0.0"
      };
    }
  }]);
