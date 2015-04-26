'use strict';

angular.module('kolohelios')
.controller('PostsListCtrl', ['$scope', 'Post', '$state', function($scope, Post, $state){

  $scope.posts = Post.init();

  $scope.showPost = function(post){
    $state.go('posts.show', {postsId: post.$id});
  };

}]);
