'use strict';

angular.module('kolohelios')
.factory('Post', ['$rootScope', '$firebaseArray', '$firebaseObject', function($rootScope, $firebaseArray, $firebaseObject){

  var fbPosts;
  var afPosts;

  function init(){
    fbPosts = $rootScope.fbRoot.child('posts/');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  function save(post){
    return afPosts.$add(post);
  }

  function retrievePost(post){
    var fbPost =$rootScope.fbRoot.child('posts/' + post);
    var afPost = $firebaseObject(fbPost);
    return afPost;
  }

  return {init: init, save: save, retrievePost: retrievePost};
}]);
