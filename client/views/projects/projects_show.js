// /views/projects/projects_show.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsShowCtrl', ['$scope', 'Project', '$state', '$window', function($scope, Project, $state, $window){

  $scope.projectId = $state.params.project;

  $scope.projects = Project.init();
  $scope.imageIndex = 0;

  function findRecord(recordSet, name){
    for(var i = 0; i < recordSet.length; i++){
      if(recordSet[i].name === name){
        $scope.project = recordSet[i];
        $scope.last = i > 0 ? recordSet[i - 1].name : recordSet[recordSet.length - 1].name;
        $scope.next = i < recordSet.length - 1 ? recordSet[i + 1].name : recordSet[0].name;
      }
    }
    angular.element('.materialboxed').materialbox();
    if($scope.project === undefined){
      $window.swal({title: 'Project not found.', text: 'The project that was requested was not found.', type: 'error'});
      $state.go('projects.list');
    }
  }

  $scope.projects.$loaded().then(function(){
    $scope.projectArray = [];
    $scope.projects.forEach(function(record){
      $scope.projectArray.push(record);
    });
    findRecord($scope.projectArray, $scope.projectId);
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

  $scope.changeProject = function(direction){
    if(direction === 'last'){
      findRecord($scope.projectArray, $scope.last);
    }else{
      findRecord($scope.projectArray, $scope.next);
    }
  }



}]);
