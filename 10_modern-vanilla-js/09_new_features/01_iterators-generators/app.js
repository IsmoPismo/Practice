// Iterator
function nameIterator(names){
  let nextIndex = 0

  return {
    next: function(){
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false} :
      { done: true}
    }
  }
}

const namesArr = ['Aria', 'Pinđa', 'Šnjufka', 'Vrtirep']
const listanje = nameIterator(namesArr)

// console.log(listanje.next().value);


// Generator
function* sayNames(){
  yield 'Aria'
  yield 'Pinđa'
  yield 'Maza'
  yield 'Beba'
  yield 'Bjelka'
}

const names = sayNames()

// console.log(names.next().value);

function* getNewId(){
  let id = 19

  while(true){
    yield id++
  }
}

const gen = getNewId()

const first = gen.next().value // 19
const second = gen.next().value // 20
