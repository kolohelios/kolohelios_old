'use strict';

angular.module('kolohelios')
.controller('HomeCtrl', ['$scope', function($scope){
  $scope.view = -1;
  $scope.showProjectView = false;
  $scope.projects = [
    { name: 'Calculator',
      desc: 'While at Coding House, I was asked to duplicate the appearance and function of Apple\'s calculator.',
      extddesc: 'After matching the styling of the Apple calculator, I was able to match the functionality of it.',
      screenshotthumb: '/assets/calcthumb.jpg',
      techs: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      role: 'sole developer',
      screenshot: '/assets/calcthumb.jpg',
      linktext: 'Click to view calculator',
      linktoapp: 'http://calc.kolohelios.com'
    },
    { name: 'Tower of Hanoi',
      desc: 'Another assignment at Coding House was to write a Tower of Hanoi game.',
      extddesc: '',
      screenshotthumb: '/assets/hanoithumb.jpg',
      techs: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      role: 'sole developer',
      screenshot: '/assets/hanoithumb.jpg',
      linktext: 'Click to play game',
      linktoapp: 'http://hanoi.kolohelios.com/'
    },
    { name: 'Marmot Checkers',
      desc: '',
      extddesc: '',
      screenshotthumb: '/assets/checkersthumb.jpg',
      techs: [],
      role: 'sole developer',
      screenshot: '/assets/checkersthumb.jpg',
      linktext: 'Click to play game',
      linktoapp: 'http://checkers.kolohelios.com'
    }
  ];

  $scope.caseStudy = function(projectNum){
    $scope.view = projectNum;
    $scope.showProjectView = true;
  };
}]);
