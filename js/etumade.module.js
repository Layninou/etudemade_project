(function (){
"use strict";


// Etumade module that include the public module as a dependency

angular.module('etumade', ['public'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  //if user goes to path that does not exist, it is redirect to public root
  $urlRouterProvider.otherwise('/');

}

})();
