(function(){
'use strict';

angular.module('practiceExample',[])

.controller('MyFirstController', function ($scope) {
  $scope.string = "Testing";
  $scope.sayHelloCourse = function(){
    return"Practicing";
  };
});

})();
