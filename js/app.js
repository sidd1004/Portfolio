'use strict';

/**
 * Main module of the application.
 */
 angular
 .module('portfolio', ['ngRoute'])

 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homePage',
  })
  /*.when('/perreceipt', {
    templateUrl: 'views/perreceipt.html',
    controller: 'PerReceipt',
    controllerAs: 'perreceipt'
  })*/
  .otherwise({
    redirectTo: '/'
  });
});
