//projects_list.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsListCtrl', ['$scope', 'Portfolio', function($scope, Portfolio, $window){

  $scope.projects = Portfolio.init();

  $scope.projectDelete = function(project){
    var confirmDelete = $window.confirm('Are you sure you want to delete this image?');
    if(confirmDelete === true){
      Portfolio.delete(project);
    }
  };
}]);
