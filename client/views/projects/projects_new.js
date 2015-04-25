'use strict';

angular.module('kolohelios')
.controller('ProjectsNewCtrl', ['$scope', 'Project', function($scope, Project){

  $scope.projects = Project.init();

  console.log('ProjectsNewCtrl');
}]);
