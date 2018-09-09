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
    addItem: function(name, cal){
      let ID;
      if(data.items.length <= 0){
        ID = 0;
      } else {
        ID = data.items[data.items.length - 1].id + 1
      }
      cal = parseInt(cal);
      let newItem = new Item(ID, name, cal);
      data.items.push(newItem);
      return newItem
    },
    logData: function(){
      return data
    }
  }
})()

// -- UI Conroller --
const UICtrl = (function(){
  const UISelector = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelector.itemNameInput).value,
        calories: document.querySelector(UISelector.itemCaloriesInput).value
      }
    },
    getUISelector: function(){
      return UISelector
    }
  }
})()

// -- App Conroller --
const App = (function(ItemCtrl, UICtrl){
  const loadEventListeners = function(){
    const UISelectors = UICtrl.getUISelector();
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
  }

  const itemAddSubmit = function(e){
    // Get Form input from UICtrl
    const input = UICtrl.getItemInput();

    if(input.name !== '' && input.calories !== ''){
      const newItem = ItemCtrl.addItem(input.name, input.calories)
    }
    e.preventDefault()
  }


  // PUBLIC METHODS
  return {
    init: function(){
      const items = ItemCtrl.getItems()
      UICtrl.populateItemList(items);
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl)

App.init()
