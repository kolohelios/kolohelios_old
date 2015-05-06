//posts_new.js
'use strict';

angular.module('kolohelios')
.controller('PostsNewCtrl', ['$scope', 'Post', function($scope, Post){

  $scope.posts = Post.init();

  $scope.post = {};
  $scope.post.tags = [];
  $scope.post.images = [];

  $scope.addImage = function(newImage){
    console.log('newImage: ', newImage, 'images: ', $scope.post.images);
    $scope.post.images.push(newImage);
    $scope.newImage = '';
  };
  $scope.addTag = function(newTag){
    $scope.post.tags.push(newTag);
    $scope.newTag = '';
  };

  $scope.addPost = function(post){
    $scope.post.postDate = $scope.post.postDate.getTime();
    Post.save(post);
    $scope.post = {};
  };

}]);
