'use strict';

angular.module('kolohelios-blog')
.controller('AdminCtrl', ['$rootScope', '$scope', 'User', function($rootScope, $scope, User){

  $scope.loginUser = function(user){
    User.login(user)
    .then(console.log('admin logged in'))
    .catch(function(err){
      console.error(err);
    });
  };
}]);
