//projects_new.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsRecordCtrl', ['$scope', 'Project', '$stateParams', function($scope, Project, $stateParams){

  $scope.projects = Project.init();

  $scope.project = {};
  $scope.project.techs = [];
  $scope.projectId = null;

  if($stateParams){
    $scope.projectId = $stateParams.projectsId;
    $scope.projects.$loaded().then(function(){
      $scope.project = $scope.projects.$getRecord($scope.projectId);
    });
  }

  $scope.addTech = function(newTech){
    $scope.project.techs.push(newTech);
    $scope.newTech = '';
  };

  $scope.addProject = function(project){
    Project.add(project);
    $scope.project = {};
  };

  $scope.saveProject = function(project){
    Project.save(project);
    $scope.project = {};
  };

}]);
