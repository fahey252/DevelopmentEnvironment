window.angular.module('BlankApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
            //controller: 'AppController'
        });
}]);
