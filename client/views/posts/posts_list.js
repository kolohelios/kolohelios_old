'use strict';

angular.module('kolohelios')
.controller('PostsListCtrl', ['$scope', 'Post', function($scope, Post){

  $scope.posts = Post.init();

  console.log('PostsListCtrl');

}]);
