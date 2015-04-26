'use strict';

angular.module('kolohelios')
.controller('PostsShowCtrl', ['$scope', 'Post', '$stateParams', function($scope, Post, $stateParams){

  $scope.post = {};

  var postId = $stateParams.postsId;
  $scope.post = Post.retrievePost(postId);

  console.log($scope.post.bodyText);
}]);
