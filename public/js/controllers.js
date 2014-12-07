'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('BeerListCtrl', function ($scope, Beer) {
    console.log('Beer List Controller');

    $scope.beers = Beer.query();

    $scope.remove = function(id) {
      Beer.remove({id: id});
      $scope.beers = Beer.query();
    }
  }).
  controller('BeerShowCtrl', function ($scope, $routeParams, Beer) {
    console.log('Beer Show Controller');

    $scope.beer = Beer.get({id: $routeParams.id});
  }).
  controller('BeerSaveCtrl', function ($scope, $routeParams, Beer) {
    console.log('Beer Save Controller');

    $scope.beer = {};

    if ($routeParams.id) {
      $scope.title = 'Alterar cerveja';

      var $id = $routeParams.id;
      $scope.beer = Beer.get({id: $id});
      $scope.save = function() {
        delete $scope.beer._id;
        console.log(Beer.update({id: $id}, $scope.beer));
      }
    }
    else {
      $scope.title = 'Cadastro de cerveja';

      $scope.save = function() {
        var save = Beer.save($scope.beer);
        console.log(JSON.stringify(save));
      }
    }
  }).
  controller('HomeCtrl', function($scope){
    console.log('Home Ctrl');

    $scope.title = 'Home';
  });
