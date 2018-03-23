var animals = ["Dog","Mouse","Gopher","Donkey","Zebra","Dragon","Wolf","Lion"];

// Adds Item to the End
animals.push("Sheep");
// Removes Item to the End
animals.pop();

// Removes First Item
animals.shift();
// Adds Item to the Beginig
animals.unshift("Dog");

// Reverse Array
reverseArray = []
arrayLenght = animals.length
for (i = 0; i < arrayLenght; i++) {
  reverseArray.push(animals.pop())
}
console.log(reverseArray);
