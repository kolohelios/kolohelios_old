// /models/project.js

'use strict';

angular.module('kolohelios')
.factory('Project', ['$rootScope', '$firebaseObject', function($rootScope, $firebaseObject){
  var fbProject;
  var afProject;

  function Project(){}

  Project.init = function(){
    fbProject = $rootScope.fbRoot.child('projects/');
    afProject = $firebaseObject(fbProject);
    return afProject;
  };

  Project.save = function(project){
    return afProject.$save(project);
  };

  Project.find = function(projectName){
    afProject.forEach(function(obj){
      console.log(obj.name);
      if(obj.name === projectName){
        return obj;
      }
    });
  };

  return Project;
}]);
