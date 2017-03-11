(function() {
"use strict";

angular.module('public')
.config(routeConfig);


// Config the routes and views

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'js/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'js/public/template/home.html'
    });

}
})();
