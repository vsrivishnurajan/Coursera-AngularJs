(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.lunchItems="";
  $scope.checkItems = function(){
    var splitElem = $scope.lunchItems;
    var elem = elementSplitting(splitElem);
    msgResponseSystem($scope,elem);
  }
}

function elementSplitting(splitElem){
var elem = splitElem.split(",");
  var arr = [];
  angular.forEach(elem,function(value){
    if(value.trim().length != 0){
      arr.push(value);
    }
  });
  return arr;
}

function msgResponseSystem( $scope, elem){
  var length = elem.length;
  if(length != 0){
    if(length>3){
      $scope.lunchItemselem = "Too Much!!";
    }else{
      $scope.lunchItemselem = "  Enjoy!";
    }
    $scope.myObj = {
        "border-color" : "green",
    };
    $scope.msgColor = {
      "color" : "green",
    }
  } else{
    $scope.lunchItemselem = "Enter Items to Check !";
    $scope.myObj = {
        "border-color" : "red",
    };
    $scope.msgColor = {
      "color" : "red",
    }
  }
}

})();
