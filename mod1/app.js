(function() {
  'use strict';
  angular.module('week1App', [])
  .controller('LunchController', LunchController);

  LunchController.$inject =['$scope'];
  function LunchController($scope) {
    $scope.lunch_items = "";
    $scope.diet_minder = "";
    $scope.countItems = function() {
      var count = $scope.lunch_items.split(',');

      var portion_flag = 0;
      for (var i = 0; i < count.length; i++) {
        if (count[i].trim().length > 0) 
          portion_flag +=1 ;
      }

      if (portion_flag === 0){
        $scope.diet_minder = "Please enter data first";
      }
      else if (portion_flag <=3) {
        $scope.diet_minder ="Enjoy!";
      }
      else { 
        $scope.diet_minder ="Too much!";
      }
    };
  }

})();
