// /models/usgs.js

'use strict';

angular.module('kolohelios')
.factory('USGS', ['$http', 'usgsUrl', '$rootScope', '$window', function($http, usgsUrl, $rootScope, $window){
  function getEarthquakes(){
    var startTime = $window.moment().subtract(14, 'days').format('YYYY-MM-DD');
    var endTime = $window.moment().format('YYYY-MM-DD');
    var timeString = '&starttime=' + startTime + '&endtime' + endTime;
    $http.get(usgsUrl + timeString + '&latitude=47.6097&longitude=-122.3331&maxradiuskm=402&minmagnitude=2.5')
    .then(function(response){
      $rootScope.earthquakes = response.data.features.map(function(eq){
        eq.properties.timeAgo = $window.moment(eq.properties.time).fromNow();
        return eq;
      });
    });
  }

  return {getEarthquakes: getEarthquakes};
}]);
