//projects_list.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsListCtrl', ['$scope', 'Project', function($scope, Project){
  $scope.projects = Project.init();
  console.log($scope.projects);
}]);
