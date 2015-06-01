//posts_new.js
'use strict';

angular.module('kolohelios')
.controller('PostsRecordCtrl', ['$scope', 'Post', '$state', function($scope, Post, $state){

  $scope.postId = $state.params.post;

  if($scope.postId){
    $scope.posts = Post.init();
    $scope.posts.$loaded().then(function(){
      $scope.posts.forEach(function(obj){
        if(obj.$id === $scope.postId){
          obj.postDate = new Date(obj.postDate);
          $scope.post = obj;
          $scope.post.tags = $scope.post.tags ? $scope.post.tags : [];
        }
      });
    });
  }else{
    Post.init();
    $scope.post = {};
    $scope.post.tags = [];
    $scope.post.images = [];
  }

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
    Post.create(post);
    $scope.post = {};
  };

  $scope.savePost = function(post){
    $scope.post.postDate = $scope.post.postDate.getTime();
    Post.save(post)
    .then(function(){
      $scope.post = {};
      $scope.postId = null;
    });
  };

}]);
