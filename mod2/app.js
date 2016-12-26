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
    buyList.markBought = function(index){
      ShoppingListCheckoffService.markItemAsBought(index);
    };
  }
  

  AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];

  function AlreadyBoughtController(ShoppingListCheckoffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckoffService.getItemsBought();
  }

  
  function ShoppingListCheckoffService() {
    var service = this;

    var items_to_buy= [{quantity: 2, name: 'choco bombs'},
                    {quantity: 3, name: 'chips'},
                    {quantity: 4, name: 'chips'},
                    {quantity: 6, name: 'chips'} ];
    var bought_items=[];
    // [{quantity: 2, name: 'carrots'},
    //                 {quantity: 3, name: 'carrots'},
    //                 {quantity: 4, name: 'carrots'},
    //                 {quantity: 6, name: 'carrots'} ];
    

    service.addItemToBuy = function(item_name, item_qty) {
      var item = { 
        name: item_name,
        quantity: item_qty
      };
      items_to_buy.push(item);
    };

    service.markItemAsBought = function(item_index) {
      var item = items_to_buy.splice(item_index, 1);
      bought_items.push(item[0]);
    };
    service.getItemsToBuy = function() {
      return items_to_buy;
    };
    service.getItemsBought = function() {
      return bought_items;
    };

  }


})();
