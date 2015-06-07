// /views/posts/posts_show.js
'use strict';

angular.module('kolohelios')
.controller('PostsShowCtrl', ['$scope', 'Post', '$state', '$window', function($scope, Post, $state, $window){

  $scope.post = {};

  $scope.posts = Post.init();

  if($state.params.post){
    $scope.postId = $state.params.post;
    $scope.posts.$loaded().then(function(){
      $scope.post = $scope.posts.$getRecord($scope.postId);
    });
  }

  $scope.removePost = function(post){
    var confirmDelete = $window.confirm('Are you sure you want to delete this post?');
    if(confirmDelete === true){
      Post.remove(post)
      .then(function(){
        $state.go('posts.list');
      });
    }
  };

}]);
