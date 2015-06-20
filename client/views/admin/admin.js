// /views/admin/admin.js

'use strict';

angular.module('kolohelios')
.controller('AdminCtrl', ['$scope', 'User', function($scope, User){
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
