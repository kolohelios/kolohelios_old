'use strict';

angular.module('kolohelios')
.factory('Project', ['$rootScope', '$firebaseArray', '$firebaseObject', function($rootScope, $firebaseArray, $firebaseObject){

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

  function retrieveProject(project){
    var fbProject =$rootScope.fbRoot.child('projects/' + project);
    var afProject = $firebaseObject(fbProject);
    return afProject;
  }

  function save(project){
    return afProjects.$save(project);
  }

  return {init: init, add: add, retrieveProject: retrieveProject, save: save};
}]);
