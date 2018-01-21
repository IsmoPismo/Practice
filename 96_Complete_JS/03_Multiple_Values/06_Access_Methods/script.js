var animals = ["Cat","Dog","Rabit","Bird"]

var inOfCat = animals.indexOf("Cat")
var inOfDog = animals.indexOf("Dog")
var inOfNone = animals.indexOf("Tentacle")

console.log("Index of cat is " + inOfCat + ". Index of Dog is " + inOfDog);

var answer = prompt("What is the index of a non exsistent item?")
answer == -1 ? alert("Yes, it's -1") : alert("No, the right answer is -1")

// Using .indexOf as a check if it's included
var q = prompt("What are you looking for")
var p = animals.indexOf(q)
var message = p < 0 ? "Not in this list" : "FOUND ONE"
console.log(message);

// better way to see if it's included
var bird = "Bird"
var incl = animals.includes(bird)
console.log(incl? (bird + " is here"):"not here")

// Slice returns a part of the array (does not modify the array)
console.log(animals.slice(1,3)) // from 1 to (but not icluding) 3
