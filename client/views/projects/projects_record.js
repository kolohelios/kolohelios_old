// /views/projects/projects_record.js

'use strict';

angular.module('kolohelios')
.controller('ProjectsRecordCtrl', ['$scope', 'Project', '$state', 'Portfolio', function($scope, Project, $state, Portfolio, $window){
  $scope.projectId = $state.params.project;

  if($scope.projectId){
    $scope.projects = Project.init();
    $scope.projects.$loaded().then(function(){
      $scope.projects.forEach(function(obj){
        if(obj.name === $scope.projectId){
          $scope.project = obj;
          $scope.project.techs = $scope.project.techs ? $scope.project.techs : [];
        }
      });
    });
  }else{
    Portfolio.init();
    $scope.project = {};
    $scope.project.techs = [];
    $scope.project.images = [];
  }

  $scope.addTech = function(newTech){
    $scope.project.techs.push(newTech);
    $scope.newTech = '';
  };

  $scope.addImage = function(link, caption){
    var imageArray = [];
    console.log($scope.imageLink);
    imageArray.push(link);
    imageArray.push(caption);
    $scope.project.images.push(imageArray);
    $scope.imageLink = '';
    $scope.imageCaption = '';
  };

  $scope.removeImage = function(imageIndex){
    var confirmDelete = $window.confirm('Are you sure you want to delete this image?');
    if(confirmDelete === true){
      $scope.project.images.splice(imageIndex, 1);
    }
  };

  $scope.addProject = function(project){
    Portfolio.add(project);
    $scope.project = {};
  };

  $scope.saveProject = function(project){
    Project.save(project);
    $state.go('projects.list');
  };
}]);
