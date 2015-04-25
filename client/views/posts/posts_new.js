'use strict';

angular.module('kolohelios-blog')
.controller('PostsNewCtrl', ['$scope', 'Post', function($scope, Post){
  console.log('PostsNewCtrl');

  $scope.posts = Post.init();

  $scope.post = {};
  $scope.post.tags = [];
  $scope.post.images = [];

  $scope.addImage = function(newImage){
    $scope.post.images.push(newImage);
    $scope.newImage = '';
    console.log($scope.post.images);
  };
  $scope.addTag = function(newTag){
    $scope.post.tags.push(newTag);
    $scope.newTag = '';
    console.log($scope.post.tags);
  };

  $scope.addPost = function(post){
    Post.save(post);
  };

}]);
