// Storage Conroller

// -- Item Conroller --
const ItemCtrl = (function(){
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories= calories;
  }

  //Initializing
  const data = {
    items: [
      {id: 0, name: 'Dinner', calories: 1000},
      {id: 1, name: 'Snack', calories: 500},
      {id: 2, name: 'Doručak', calories: 700}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // PUBLIC METHODS
  return {
    getItems: function(){
      return data.items
    },
    logData: function(){
      return data
    }
  }
})()

// -- UI Conroller --
const UICtrl = (function(){
  const UISelector = {
    itemList: '#item-list'
  }
  // PUBLIC METHODS
  return {
    populateItemList: function(items){
      let html = ``;

      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong>
          <em>${item.calories}kCal</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`
      })
      document.querySelector(UISelector.itemList).innerHTML = html;
    }
  }
})()

// -- App Conroller --
const App = (function(ItemCtrl, UICtrl){

  // PUBLIC METHODS
  return {
    init: function(){
      const items = ItemCtrl.getItems()
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UICtrl)

App.init()
