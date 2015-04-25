'use strict';

angular.module('kolohelios-blog')

$scope.afAuth.$onAuth(function(data) {
  if(data){
    $rootScope.activeUser = data;
  } else{
    $rootScope.activeUser = null;
  }
  $state.go('home');
});
