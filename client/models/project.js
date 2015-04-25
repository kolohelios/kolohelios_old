'use strict';

angular.module('kolohelios')
.factory('Project', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  var fbProjects;
  var afProjects;

  function init(){
    fbProjects = $rootScope.fbRoot.child('projects/');
    afProjects = $firebaseArray(fbProjects);
    return afProjects;
  }

  function save(project){
    return afProjects.$add(project);
  }

  return {init: init, save: save};
}]);
