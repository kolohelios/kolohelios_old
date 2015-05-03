// /views/projects/projects_show.js
'use strict';

angular.module('kolohelios')
.controller('ProjectsShowCtrl', ['$scope', 'Project', '$state', function($scope, Project, $state){


  Project.find($state.params.project);



}]);
