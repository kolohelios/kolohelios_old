'use strict';

angular.module('kolohelios')
.controller('AdminCtrl', ['$scope', 'User', '$rootScope', function($scope, User, $rootScope){

  $scope.loginUser = function(user){
    User.login(user)
    .then(console.log('admin logged in'))
    .catch(function(err){
      console.error(err);
    });
  };

  $scope.logout = function(){
    User.logout();
  };

}]);
