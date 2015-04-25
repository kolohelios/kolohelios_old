'use strict';

angular.module('kolohelios')
.controller('NavCtrl', ['$scope', '$rootScope', 'User', function($scope, $rootScope, User){

  $scope.afAuth.$onAuth(function(data) {
    if(data){
      $rootScope.activeUser = data;
      console.log(data);
    } else{
      $rootScope.activeUser = null;
    }
  });

  $scope.logout = function(){
    User.logout();
  };

}]);
