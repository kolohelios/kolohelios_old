'use strict';

angular.module('kolohelios')
.factory('Project', ['$rootScope', '$firebaseObject', function($rootScope, $firebaseObject){

  var fbProject;
  var afProject;

  function Project() {}

  // Project.init = function(projectID){
  //   fbProject = $rootScope.fbRoot.child('projects/' + projectID);
  //   afProject = $firebaseObject(fbProject);
  //   return afProject;
  // };

  Project.save = function(project){
    return afProject.$save(project);
  };

  Project.find = function(projectName){
    fbProject = $rootScope.fbRoot.child('projects/');
    afProject = $firebaseObject(fbProject);
    afProject.$loaded().then(function(){
      afProject.forEach(function(obj){
      if(obj.name === projectName){
        console.log(obj);
        $rootScope.project = obj;
      }
    });
  });
  };

  return Project;

}]);
