// /views/posts/posts_list.js

'use strict';

angular.module('kolohelios')
.controller('PostsListCtrl', ['$scope', 'Post', '$state', function($scope, Post, $state){
  $scope.posts = Post.init();

  $scope.showPost = function(post){
    $state.go('posts.show', {post: post.$id});
  };
}]);
