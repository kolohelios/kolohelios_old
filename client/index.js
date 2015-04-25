'use strict';

angular.module('kolohelios', ['firebase', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  console.log('test');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('admin', {url: '/admin', templateUrl: '/views/admin/admin.html', controller: 'AdminCtrl'})

  .state('posts', {url: '/posts', templateUrl: '/views/posts/posts.html', abstract: true})
  .state('posts.list', {url: '', templateUrl: '/views/posts/posts_list.html', controller: 'PostsListCtrl'})
  .state('posts.new', {url: '/new', templateUrl: '/views/posts/posts_new.html', controller: 'PostsNewCtrl'})
  .state('posts.show', {url: '/{postsId}', templateUrl: '/views/posts/posts_show.html', controller: 'PostsShowCtrl'})

  .state('projects', {url: '/projects', templateUrl: '/views/projects/projects.html', abstract: true})
  .state('projects.list', {url: '', templateUrl: '/views/projects/projects_list.html', controller: 'ProjectsListCtrl'})
  .state('projects.new', {url: '', templateUrl: '/views/projects/projects_new.html', controller: 'ProjectsNewCtrl'})
  .state('projects.show', {url: '', templateUrl: '/views/projects/projects_show.html', controller: 'ProjectsShowCtrl'});


}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
