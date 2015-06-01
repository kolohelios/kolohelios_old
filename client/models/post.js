// /models/post.js
'use strict';

angular.module('kolohelios')
.factory('Post', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  var fbPosts;
  var afPosts;

  function init(){
    fbPosts = $rootScope.fbRoot.child('posts/');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  function create(post){
    return afPosts.$add(post);
  }

  function save(post){
    return afPosts.$save(post);
  }
  
  function remove(post){
    return afPosts.$remove(post);
  }

  return {init: init, create: create, save: save, remove: remove};
}]);
