(function(){
'use strict';

angular.module('DIApp',[])
.controller('DIController',ContollerFunction);
function ContollerFunction($scope, $filter, $injector){//add $injector as a param
console.log($injector.annotate(ContollerFunction));
 //lists out the service($Sope,$filter....) that needs to be injected
 //pass the function name to which it is being injected to in .annotate

  $scope.name = "Testing";
  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);

  }

  $scope.lower = function(){
    var lowCase = $filter('lowercase');
    $scope.name = lowCase($scope.name);
  }

}

function AnnotateMe(name,job,blah){
  return "blah balh";
}
console.log(AnnotateMe.toString());
//$Injector helps to find which service has to injected where in the Angular js
})();
