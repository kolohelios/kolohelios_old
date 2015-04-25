'use strict';

angular.module('kolohelios')
.controller('PostsShowCtrl', ['$scope', 'Post', function($scope, Post){

  $scope.posts = Post.init();

  console.log('PostsShowCtrl');
}]);
