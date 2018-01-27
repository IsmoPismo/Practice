// Create Object
var bob = {age: 29, height: 1.88, weight: 87}

// Create Object within Object and another Object + Create Array of Objects
var friendsObject = {f1 : bob, f2 : {age: 25, height: 1.76, weight: 92}}
var friendsArray = [bob, {age: 25, height: 1.76, weight: 92}]

// Check the info
console.log(friendsObject["f1"]["weight"]); // 87
console.log(friendsArray[1]["age"])         // => 25

// Check the Info 2
console.log(friendsObject.f2.height)        // => 1.76
console.log(friendsArray[0].age);           // => 29

// Update the information
for (var v in friendsArray) {
  friendsArray[v].age++
  friendsArray[v].height++
  friendsArray[v].weight++
}

for (var x in friendsArray) {
  console.log(x)
  console.log(friendsArray[x].age)
  console.log(friendsArray[x].height)
  console.log(friendsArray[x].weight)
}
