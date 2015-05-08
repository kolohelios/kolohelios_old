// /views/projects/projects_show.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsShowCtrl', ['$scope', 'Project', '$state', '$window', function($scope, Project, $state, $window){

  $scope.projectId = $state.params.project;

  $scope.projects = Project.init();

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



}]);
