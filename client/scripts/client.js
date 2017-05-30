const careApp = angular.module('careApp', ['ngRoute'], function() {

  //ng config for multiple views
  careApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/index.html',
      controller: 'AuthController as ac'
    }).when('/home', {
      templateUrl: 'views/pages/home',
      controller: 'HomeController as hc'
    }). when('/careshare', {
      templateUrl: '/views/pages/careshare',
      controller: 'CareShareController as csc'
    }).when('/careprofile', {
      templateUrl: '/views/pages/careprofile',
      controller: 'CareProfileController as cpc'
    }).when('/sharenetwork', {
      templateUrl: '/views/pages/sharenetwork',
      controller: 'ShareNetworkController as snc'
    }).otherwise('/');
    $locationProvider.html5Mode(true);
  }); //end config

}); //end careApp
