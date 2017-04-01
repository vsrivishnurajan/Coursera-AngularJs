(function(){
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope){
$scope.name="  ";
$scope.nameValue=0;
$scope.calculateNumeric = function(){
  var totalNameValue = calculateNumericForString($scope.name);
  $scope.nameValue = totalNameValue;
};
function calculateNumericForString(String){
  var totalStringValue = 0;
  for(var i = 0;i<String.length;i++){
    totalStringValue +=  String.charCodeAt(i);
  }
  return totalStringValue;
}
});
})();
