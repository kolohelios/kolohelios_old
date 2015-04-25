'use strict';

angular.module('kolohelios-blog')
.controller('PostsShowCtrl', ['$scope', 'Post', function($scope, Post){

  $scope.posts = Post.init();

  console.log('PostsShowCtrl');
}]);
