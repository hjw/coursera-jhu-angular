(function() {
  'use strict';
  /**
   * ShoppListCheckoff Module
   */
   angular.module('ShoppingListCheckoff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

   ToBuyController.$inject = ['ShoppingListCheckoffService'];

   function ToBuyController(ShoppingListCheckoffService) {
    var buyList = this;
    buyList.message = "hello hawley.";
    buyList.items = ShoppingListCheckoffService.getItemsToBuy();
    console.log(buyList);
  }
  

  AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];

  function AlreadyBoughtController(ShoppingListCheckoffService) {

  }

  
  function ShoppingListCheckoffService() {
    var service = this;

    var items_to_buy= [{quantity: 2, name: 'choco bombs'},
                    {quantity: 3, name: 'chips'},
                    {quantity: 4, name: 'chips'},
                    {quantity: 6, name: 'chips'} ];
    

    service.addItemToBuy = function(item_name, item_qty) {
      var item = { 
        name: item_name,
        quantity: item_qty
      };
      items_to_buy.push(item);
    };

    service.markItemAsBought = function() {

    };
    service.getItemsToBuy = function() {
      return items_to_buy;
    };
    service.getItemsBought = function() {

    };

  }


})();
