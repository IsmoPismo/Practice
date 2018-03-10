// func statement
function grues(name){
  console.log("hi", name);
}

grues('Bobo');

// using a function expression
var greed = function(name){
  console.log('hi', name);
}

greed('Fifi');

// using a Immediately Invoked Function expression
var greeting = function(name){
  return 'hello ' + name;
}('John');

// to trick the parser we put the anonymous func
// inside zagrade
var firstname = 'John';

(function(name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // IIFE
