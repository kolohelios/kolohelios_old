'use strict';

$(document).ready(function(){
  $('.button-collapse').sideNav({ closeOnClick: true });
});

angular.module('kolohelios')
.controller('NavCtrl', ['$scope', '$rootScope', 'User', function($scope, $rootScope, User){

  $scope.afAuth.$onAuth(function(data) {
    if(data){
      $rootScope.activeUser = data;
    } else{
      $rootScope.activeUser = null;
    }
  });

  $scope.logout = function(){
    User.logout();
  };

}]);
