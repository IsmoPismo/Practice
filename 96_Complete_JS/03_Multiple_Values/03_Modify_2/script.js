var animals = ["Dog","Mouse","Gopher","Donkey","Zebra","Dragon","Wolf","Lion"];

// 2 - index postion
// 4 - how many items to remove
animals.splice(2,4);

// Reverse the order
animals.reverse();

// Sort items
animals.sort();

// Chaing methods
animals.sort().reverse()

animals[20] = "Horse"
animals.fill("Fill", 4, animals.length-1)
console.log(animals);
