(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject =['$scope','$filter'];
function LunchCheckController($scope,$filter) {
  $scope.name="";
  $scope.totalValue = 0;
  $scope.message = "";
  $scope.separator =",";

  $scope.handleClick = function() {
  var arrayOfStrings = $scope.name.split($scope.separator);
  $scope.totalValue = arrayOfStrings.length;
  if ($scope.totalValue > 3) {
    $scope.message = "Too Much!!";
  } else if ($scope.totalValue > 0 && $scope.totalValue <= 3) {
    $scope.message = "Enjoy!!";
  }else {
    $scope.message = "Enter atleast one lunch !!";
  }
  };
}
})();
