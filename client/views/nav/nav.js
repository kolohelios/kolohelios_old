// /views/nav/nav.js

'use strict';

angular.element(document).ready(function(){
  angular.element('.button-collapse').sideNav({closeOnClick: true});
});

angular.module('kolohelios')
.controller('NavCtrl', ['$scope', '$rootScope', 'User', 'Wunderground', 'USGS', function($scope, $rootScope, User, Wunderground, USGS){
  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }else{
      $rootScope.activeUser = null;
    }
  });

  $scope.logout = function(){
    User.logout();
  };

  Wunderground.getWeather();
  USGS.getEarthquakes();
}]);
