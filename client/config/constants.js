// /config/constants.js

'use strict';

angular.module('kolohelios')
.constant('firebaseUrl', 'https://kolohelios.firebaseio.com/')
.constant('technologies', ['HTML5', 'CSS3', 'AngularJS', 'Node.JS', 'jQuery', 'Twitter Bootstrap', 'Materialize', 'MongoDB/Mongoose', 'Hapi'])
.constant('wundergroundUrl', 'http://api.wunderground.com/api/')
.constant('usgsUrl', 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson');
