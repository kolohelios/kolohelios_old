// /views/posts/posts_show.js
'use strict';

angular.module('kolohelios')
.controller('PostsShowCtrl', ['$scope', 'Post', '$stateParams', function($scope, Post, $stateParams){

  $scope.post = {};

  $scope.posts = Post.init();

  if($stateParams){
    $scope.postId = $stateParams.post;
    $scope.posts.$loaded().then(function(){
      $scope.post = $scope.posts.$getRecord($scope.postId);
    });
  }

}]);
