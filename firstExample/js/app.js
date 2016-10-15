(function(){
'use strict';
var x='10';

  angular.module('firstApp',[])
  .controller('myController',function($scope){
    $scope.name = "VISHNU";
    $scope.hellofunction = function(){
      return "This is a test function"+$scope.name;
    };
  });
})();
