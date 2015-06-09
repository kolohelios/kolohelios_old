// /views/projects/projects_show.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsShowCtrl', ['$scope', 'Project', '$state', '$window', function($scope, Project, $state, $window){

  $scope.projectId = $state.params.project;

  $scope.projects = Project.init();
  $scope.imageIndex = 0;

  $scope.projects.$loaded().then(function(){
    $scope.projects.forEach(function(obj){
      console.log(obj.name);
      if(obj.name === $scope.projectId){
        $scope.project = obj;
      }
    });
    if($scope.project === undefined){
      $window.swal({title: 'Project not found.', text: 'The project that was requested was not found.', type: 'error'});
      $state.go('projects.list');
    }
  });

  $scope.changeImage = function(direction){
    if(direction === 'last'){
      if($scope.imageIndex !== 0){
        $scope.imageIndex--;
      }else{
        $scope.imageIndex = $scope.project.images.length - 1;
      }
    }else{
      if($scope.imageIndex !== $scope.project.images.length - 1){
        $scope.imageIndex++;
      }else{
        $scope.imageIndex = 0;
      }
    }
  };



}]);
