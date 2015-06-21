// /models/wunderground.js

'use strict';

angular.module('kolohelios')
.factory('Wunderground', ['$http', 'wundergroundUrl', '$firebaseObject', '$rootScope', function($http, wundergroundUrl, $firebaseObject, $rootScope){
  var fbWunderground = $rootScope.fbRoot;
  var afWunderground = $firebaseObject(fbWunderground);

  function getWeather(){
    afWunderground.$loaded()
    .then(function(){
      var wundergroundApiKey = afWunderground.wundergroundApiKey;
      $http.get(wundergroundUrl + wundergroundApiKey + '/conditions/q/WA/Seattle.json')
      .then(function(response){
        $rootScope.temperature = response.data.current_observation.temp_f;
      });
    });
  }

  return {getWeather: getWeather};
}]);
