// /model/portfolio.js

'use strict';

angular.module('kolohelios')
.factory('Portfolio', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){
  var fbPortfolio;
  var afPortfolio;

  function Portfolio(){}

  Portfolio.init = function(){
    fbPortfolio = $rootScope.fbRoot.child('projects/');
    afPortfolio = $firebaseArray(fbPortfolio);
    return afPortfolio;
  };

  Portfolio.add = function(project){
    return afPortfolio.$add(project);
  };

  Portfolio.save = function(project){
    return afPortfolio.$save(project);
  };

  Portfolio.delete = function(project){
    return afPortfolio.$remove(project);
  };

  return Portfolio;
}]);
