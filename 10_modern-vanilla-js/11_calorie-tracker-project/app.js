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
    logData: function(){
      return data
    }
  }
})()

// -- UI Conroller --
const UICtrl = (function(){
  // PUBLIC METHODS
  return {

  }
})()

// -- App Conroller --
const App = (function(ItemCtrl, UICtrl){

  // PUBLIC METHODS
  return {
    init: function(){
      console.log('Initializing Data....');
    }
  }
})(ItemCtrl, UICtrl)

App.init()
