(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Karthik";
  $scope.sayHello = function() {
    return "Hello Karthik";
  }
});

})();
