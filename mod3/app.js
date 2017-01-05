(function() {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    .constant('menuServerURL', 'https://davids-restaurant.herokuapp.com/menu_items.json');


  function FoundItems(){
    var ddo = {
      templateUrl: 'narrowItDown.html',
      scope: {
        items: "=myList",
        title: "@title",
        remove: "&onRemove"
      }
      
    };
    return ddo;
  }

  
  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var winnow = this;
    winnow.found = "";
    
    winnow.searchTerm = "";
    winnow.match_attempted = false;

    winnow.removeItem = function(index){
      winnow.found.splice(index,1);
    };

    winnow.findMatch = function() {
      winnow.match_attempted |=  true ;
      winnow.found = [];
      if (winnow.searchTerm.length > 0) {
        var promise = MenuSearchService.getMatchedMenuItems(winnow.searchTerm);
        promise.then(function(foundItems) {
          winnow.found = foundItems;
        });
      } 
    };
  }

  MenuSearchService.$inject = ['$http', 'menuServerURL'];

  function MenuSearchService($http, menuServerURL) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
          method: "GET",
          url: menuServerURL
        })
        .then(function(result) {
          var foundItems = [];
          for (var i = 0, len = result.data.menu_items.length; i < len; i++) {
            var found = result.data.menu_items[i].description.indexOf(searchTerm);
            if (found != -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          return foundItems;
        });
    };
  }


})();
