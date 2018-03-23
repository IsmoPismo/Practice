var animals = ["Dog","Mouse","Gopher","Donkey","Zebra","Dragon","Wolf","Lion"]
var randomNum = Math.floor(Math.random() * animals.length)

var randomAnimal = (animals[randomNum])
var userInput = prompt("Whitch index is " + randomAnimal)
var response = (userInput == randomNum) ? "Correct" : "Wrong it was " + randomNum
alert(response)
