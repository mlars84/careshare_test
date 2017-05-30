const myApp = angular.module('myApp', ['ngRoute'], function() {

  //ng config for multiple views
  myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<h3>Some text</h3>',
      controller: 'DefaultController as DC'
    }).when('/')
  })
});
