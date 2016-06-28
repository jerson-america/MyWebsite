(function() {
  'use strict';

  angular
    .module('myapp')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
