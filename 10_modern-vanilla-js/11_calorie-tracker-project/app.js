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
      // {id: 0, name: 'Dinner', calories: 1000},
      // {id: 1, name: 'Snack', calories: 500},
      // {id: 2, name: 'Doručak', calories: 700}
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
    getTotalCalories: function(){
      let total = 0;
      data.items.forEach(item => {
        total += item.calories
      })
      data.totalCalories = total;
      return total
    },
    getItemById: function(id){
      return data.items.find(item => item.id === id)
    },
    setCurrentItem: function(item){
      data.currentItem = item
    },
    getCurrentItem: function(){
      return data.currentItem
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
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
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
    hideList: function(){
      document.querySelector(UISelector.itemList).style.display = 'none';
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelector.itemNameInput).value,
        calories: document.querySelector(UISelector.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // Go from hidden to shown list
      document.querySelector(UISelector.itemList).style.display = 'block'

      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`
      li.innerHTML = `<strong>${item.name}: </strong>
      <em>${item.calories}</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend', li)
    },
    showTotalCalories: function(){
      document.querySelector(UISelector.totalCalories).innerText = ItemCtrl.getTotalCalories()
    },
    clearInput: function(){
      document.querySelector(UISelector.itemNameInput).value = '';
      document.querySelector(UISelector.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelector.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelector.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelector.addBtn).style.display = 'inline'
      document.querySelector(UISelector.updateBtn).style.display = 'none'
      document.querySelector(UISelector.deleteBtn).style.display = 'none'
      document.querySelector(UISelector.backBtn).style.display = 'inline'
    },
    showEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelector.addBtn).style.display = 'none'
      document.querySelector(UISelector.updateBtn).style.display = 'inline'
      document.querySelector(UISelector.deleteBtn).style.display = 'inline'
      document.querySelector(UISelector.backBtn).style.display = 'inline'
    },
    getUISelector: function(){
      return UISelector
    }
  }
})()

// -- App Conroller --
const App = (function(ItemCtrl, UICtrl){
  // Gets the selectors and adds 2 click-events
  const loadEventListeners = function(){
    const UISelectors = UICtrl.getUISelector();
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditSubmit);
  }

  // Two Functions waiting for a click
  const itemAddSubmit = function(e){
    // Get Form input from UICtrl
    const input = UICtrl.getItemInput();

    if(input.name !== '' && input.calories !== ''){
      // Adding a new Item to the UI
      UICtrl.addListItem(ItemCtrl.addItem(input.name, input.calories));
      // Calculate and Display Total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      UICtrl.clearInput();
    }
    e.preventDefault()
  }

  const itemEditSubmit = function(e){
      if(e.target.classList.contains('edit-item')){
        // Turn id into number
        const itemId = e.target.parentNode.parentNode.id;
        const id = parseInt((itemId.split('-')[1]));
        const itemToEdit = ItemCtrl.getItemById(id)

        //Sets the Item and adds it to the Edit Form
        ItemCtrl.setCurrentItem(itemToEdit);
        UICtrl.addItemToForm();

        // Shows the edit and delete button
        UICtrl.showEditState();
      }
      e.preventDefault()
  }

  // PUBLIC METHODS
  return {
    init: function(){
      //Sets initial state and fetches the items
      UICtrl.clearEditState();
      const items = ItemCtrl.getItems();

      //ITEMS ? 0
      if(items.length === 0){
        UICtrl.hideList()
      } else {
        UICtrl.populateItemList(items);
      }

      // Calculate and Display Total calories than it loads Event Listeners
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl)

App.init()
