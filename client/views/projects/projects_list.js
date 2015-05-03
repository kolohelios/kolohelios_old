//projects_list.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsListCtrl', ['$scope', 'Portfolio', '$state', function($scope, Portfolio, $state){

  $scope.projects = Portfolio.init();

  $scope.editProject = function(project){
    $state.go('projects.edit', {projectsId: project.$id});
  };
}]);
