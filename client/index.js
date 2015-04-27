'use strict';

angular.module('kolohelios', ['firebase', 'ui.router', 'markdown', 'ngSanitize'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('contact', {url: '/contact', templateUrl: '/views/home/contact.html'})
  .state('admin', {url: '/admin', templateUrl: '/views/admin/admin.html', controller: 'AdminCtrl'})

  .state('posts', {url: '/posts', templateUrl: '/views/posts/posts.html', abstract: true})
  .state('posts.list', {url: '', templateUrl: '/views/posts/posts_list.html', controller: 'PostsListCtrl'})
  .state('posts.new', {url: '/new', templateUrl: '/views/posts/posts_new.html', controller: 'PostsNewCtrl'})
  .state('posts.show', {url: '/{postsId}', templateUrl: '/views/posts/posts_show.html', controller: 'PostsShowCtrl'})

  .state('projects', {url: '/projects', templateUrl: '/views/projects/projects.html', abstract: true})
  .state('projects.list', {url: '', templateUrl: '/views/projects/projects_list.html', controller: 'ProjectsListCtrl'})
  .state('projects.new', {url: '/new', templateUrl: '/views/projects/projects_record.html', controller: 'ProjectsRecordCtrl'})
  .state('projects.show', {url: '/{projectsId}', templateUrl: '/views/projects/projects_show.html', controller: 'ProjectsShowCtrl'})
  .state('projects.edit', {url: '/{projectsId}', templateUrl: '/views/projects/projects_record.html', controller: 'ProjectsRecordCtrl'});

}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
