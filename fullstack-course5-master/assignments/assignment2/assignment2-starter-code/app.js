(function () {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
  ,
  {
    name: "Toast",
    quantity: "5"
  }
];
var toBuyList = shoppingList;
var totalList = shoppingList.length;
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  showList.moveItem = function (itemIndex) {
    try{
      ShoppingListCheckOffService.moveItem(itemIndex);
    }
    catch(error)
    {
      showList.errorMessage = "Everything bought!!";
    }
  };
  }
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var showBoughtList = this;
    showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }
function ShoppingListCheckOffService() {
  var service = this;
  //List of items
  var boughtList = [];
  service.getItems = function () {
    return toBuyList;
  };
  service.moveItem = function (itemIndex) {

       var element = toBuyList[itemIndex];
       var message  = "";

        toBuyList.splice(itemIndex,1);
        boughtList.push(element);
        totalList--;

         try {
                if (totalList == 0) throw "Everything bought!!";
              }
          catch(error)
          {
            service.message = "Everything bought!!";
            console.log(serice.message);
          }
  };
  service.getBoughtItems = function () {
    return boughtList;
  };
}
})();
