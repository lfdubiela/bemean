'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/beers', {
      templateUrl: '/expose/beers/list',
      controller: 'BeerListCtrl'
    }).
    when('/beers/:id/show', {
      templateUrl: '/expose/beers/show',
      controller: 'BeerShowCtrl'
    }).
    when('/beers/create', {
      templateUrl: '/expose/beers/form',
      controller: 'BeerSaveCtrl'
    }).
    when('/beers/:id/edit', {
      templateUrl: '/expose/beers/form',
      controller: 'BeerSaveCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'HomeCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
