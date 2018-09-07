const hashMap = new Map();
const keyI = 'tring',
      keyII = {'lol': 'kek'};

// set, get and size
hashMap.set(keyI, 'Value of Key One');
hashMap.set(keyII, 'Value of Key Two');
hashMap.get(keyII); // Value of Key Two
hashMap.size; // 2

// Iterating
for(let [key, value] of hashMap) {
   console.log(`KEY: ${key}\nVALUE: ${value}`);
}

for(let key of hashMap.keys()) {
  console.log(`KEY: ${key}`);
}

for(let value of hashMap.values()) {
  console.log(`VALUE: ${value}`);
}


// to Array
const arrKeyVal = Array.from(hashMap) // [Array(2), Array(2)]
const arrKey = Array.from(hashMap.keys()) // ["tring", {…}]
const arrVal = Array.from(hashMap.values()) // ["Value of Key One", "Value of Key Two"]
