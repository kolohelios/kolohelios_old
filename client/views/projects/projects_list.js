//projects_list.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsListCtrl', ['$scope', 'Portfolio', function($scope, Portfolio){

  $scope.projects = Portfolio.init();

}]);
