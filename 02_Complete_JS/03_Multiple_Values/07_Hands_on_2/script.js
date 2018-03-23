var numbers = [2,4,88,75,9420,5,15,-1,"Ape","Zebra"]
numbers.sort()

var q = prompt("What do you want to be removed")
var finder = numbers.indexOf(q)
var v = finder > -1 ? finder : numbers.length
var remover = numbers.splice(v, 1)

console.log(numbers);
