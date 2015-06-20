// /views/projects/projects_show.js

'use strict';

angular.module('kolohelios')
.controller('ProjectsShowCtrl', ['$scope', 'Project', '$state', '$window', function($scope, Project, $state, $window){
  $scope.projectId = $state.params.project;

  $scope.projects = Project.init();

  function findRecord(recordSet, name){
    for(var i = 0; i < recordSet.length; i++){
      if(recordSet[i].name === name){
        $scope.project = recordSet[i];
        $scope.last = i > 0 ? recordSet[i - 1].name : recordSet[recordSet.length - 1].name;
        $scope.next = i < recordSet.length - 1 ? recordSet[i + 1].name : recordSet[0].name;
      }
    }
    angular.element('.materialboxed').materialbox();
    if(!$scope.project){
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

  $scope.changeProject = function(direction){
    if(direction === 'last'){
      findRecord($scope.projectArray, $scope.last);
    }else{
      findRecord($scope.projectArray, $scope.next);
    }
  };
}]);
