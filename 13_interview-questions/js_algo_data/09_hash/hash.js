class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size)
  }

  _hash(key){
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 101); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value){
    const index = this._hash(key)
    if (!this.keyMap[index]){
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key){
    const index = this._hash(key)
    if (this.keyMap[index]){
      for (let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
}

let map = new HashTable(4);
map.set('key', 'val')
map.set('key1', 'val1')
map.set('key2', 'val2')
map.set('key3', 'val3')
map.set('key4', 'val4')
console.log(map.get('key4'));
