const UICtrl = (function(){
  let text = 'Hello World'

  const changeText = function (){
    const element = document.querySelector('h1')
    element.textContent = text;
  }

  return {
    callChangeText()
    {
      changeText()
    }
  }
})()

UICtrl.callChangeText();
console.log(UICtrl.text);

// Revealing
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
  }

  function get(id){
    return data.find(item => item.id === id);
  }

  return {
    add,
    get
  }
})()

ItemCtrl.add({id: 1, name: 'Fry'});
ItemCtrl.add({id: 2, name: 'Blender'});
ItemCtrl.get(2); // {id: 2, name: 'Blender'}
