//projects_new.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsNewCtrl', ['$scope', 'Project', function($scope, Project){

  $scope.projects = Project.init();

  $scope.project = {};
  $scope.project.isTopThree = true;
  $scope.project.techs = [];

  $scope.addTech = function(newTech){
    $scope.project.techs.push(newTech);
    $scope.newTech = '';
  };

  $scope.addProject = function(project){
    Project.save(project);
    $scope.project = {};
  };
}]);
