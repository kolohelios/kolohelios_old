// /directives/je-imgslider/je-imgslider.js

'use strict';

angular.module('jeImgSliderModule', [])
.directive('jeImgSlider', function(){
  var o = {};
  o.restrict = 'A';
  o.templateUrl = '/directives/je-imgslider/je-imgslider.html';
  o.scope = {
    imgarray: '='
  };
  o.link = function(){};
  o.controller = function($scope){
    $scope.imageIndex = 0;
    console.log($scope.imgarray);

    $scope.changeImage = function(direction){
      if(direction === 'last'){
        if($scope.imageIndex !== 0){
          $scope.imageIndex--;
        }else{
          $scope.imageIndex = $scope.imgarray.length - 1;
        }
      }
      if($scope.imageIndex !== $scope.imgarray.length - 1){
        $scope.imageIndex++;
      }else{
        $scope.imageIndex = 0;
      }
    };
  };
  return o;
});
