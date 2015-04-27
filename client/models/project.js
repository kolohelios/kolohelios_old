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

  function add(project){
    return afProjects.$add(project);
  }

  function save(project){
    return afProjects.$save(project);
  }

  return {init: init, add: add, save: save};
}]);
