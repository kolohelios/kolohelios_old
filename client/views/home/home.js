// /views/home/home.js

'use strict';

angular.module('kolohelios')
.controller('HomeCtrl', ['$scope', 'Post', 'Project', '$state', function($scope, Post, Project, $state){
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  $scope.posts = Post.init();
  $scope.projects = Project.init();

  $scope.caseStudy = function(projectNum){
    $scope.view = projectNum;
    $scope.showProjectView = true;
  };

  $scope.showPost = function(post){
    $state.go('posts.show', {post: post.$id});
  };

  $scope.sendMessage = function(){
    console.log('clicked');
  };
}]);
