//projects_list.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsListCtrl', ['$scope', 'Project', '$state', function($scope, Project, $state){
  $scope.projects = Project.init();

  $scope.editProject = function(project){
    $state.go('projects.edit', {projectsId: project.$id});
  }


}]);
