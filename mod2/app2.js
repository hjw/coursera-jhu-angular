(function () {
  'use strict';
 
    angular.module('ShoppingListCheckoff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckoffService', ShoppingListCheckoffService);
    
   
    ToBuyController.$inject = ['ShoppingListCheckoffService'];
    function ToBuyController(ShoppingListCheckoffService){
      var buyList = this;
      buyList.items = ShoppingListCheckoffService.getToBuyList();

      buyList.markBought = function(index) {
        ShoppingListCheckoffService.markItemAsBought(index);
      };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
    function AlreadyBoughtController(ShoppingListCheckoffService){
      var boughtList = this;
      boughtList.items = ShoppingListCheckoffService.getBoughtList();
    };

    function ShoppingListCheckoffService (){
      var service = this;
      var items_to_buy = [{quantity: 2, name: 'potatoes'},
                    {quantity: 3, name: 'onions'},
                    {quantity: 4, name: 'eggs'},
                    {quantity: 1, name: 'flour'},
                    {quantity: 2, name: 'oil'},
                    {quantity: 1, name: 'box of candles'} ];
      var bought_items = [];

      service.getBoughtList = function (){
        return bought_items;
      };

      service.getToBuyList = function () {
        return items_to_buy;
      };

      service.markItemAsBought = function(index){
        var item = items_to_buy.splice(index,1);
        bought_items.push(item[0]);
      };
    }
})();
