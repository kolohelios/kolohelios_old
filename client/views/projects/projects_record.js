//projects_new.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsRecordCtrl', ['$scope', 'Project', '$state', function($scope, Project, $state){

  $scope.projectId = $state.params.project;

  if($scope.projectId){
    $scope.projects = Project.init();
    $scope.projects.$loaded().then(function(){
      $scope.projects.forEach(function(obj){
        console.log(obj.name);
        if(obj.name === $scope.projectId){
          $scope.project = obj;
          $scope.project.techs = $scope.project.techs ? $scope.project.techs : [];
        }
      });
    });
  }else{
    $scope.project = {};
    $scope.project.techs = [];
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
    $state.go('projects.list');
  };

}]);
