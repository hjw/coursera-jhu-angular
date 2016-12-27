(function () {
  'use strict' ;
  /**
  * NarrowItDownApp Module
  *
  * week 3 assignment
  */
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

  function MenuSearchService(){

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    
  }

})();