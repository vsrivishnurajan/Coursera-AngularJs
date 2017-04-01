(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

// LunchCheckController.$inject = ['$scope','$filter'];

// function LunchCheckController($scope,$filter){
  $scope.lunchItems="";
  $scope.checkItems = function(){
    var splitElem = $scope.lunchItems;
    var elem = splitElem.split(",");
    if(elem[0].length == 0 || elem[0] == ","){
      elem.splice(0, 1);
    }

    var length = elem.length;
    if(length>3){
      $scope.lunchItemselem = "Too Much!!";
      $scope.myObj = {
          "border-color" : "red",
      };
      $scope.msgColor = {
        "color" : "red",
      }
    }else if(length != 0){
      $scope.lunchItemselem = "  Enjoy!";
      $scope.myObj = {
          "border-color" : "green",
      };
      $scope.msgColor = {
        "color" : "green",
      }
    }else{
      $scope.lunchItemselem = "Enter Items to Check !";
      $scope.myObj = {
          "border-color" : "black",
      };
      $scope.msgColor = {
        "color" : "black",
      }
    }

  //  alert();
  }
  //$scope.check = checkItems($scope,$filter);

}


})();
