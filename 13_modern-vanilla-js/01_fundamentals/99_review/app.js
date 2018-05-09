// CONSOLE
console.error('Error');
console.warn('Warning');
console.time('Hello');
  // Some code
console.timeEnd('Time passed: ');
console.table  ({a:1, b:2});


// VARIABLES
const toy = {
  color: 'red',
  size: 2
};
toy.isGood = true; // We can append properties and use methods like unshift


// PRIMITIVE TYPE
const name = 'John Doe'; // String
const age = 45; // Number
const hasKids = true; // Boolean
const car = null; // Null
let test; // Undefined
const sym = Symbol(); // Symbol

// REFERENCE TYPES (Objects)
const hobbies = ['movies', 'music']; // Array
const address = {city: 'Boston', state: 'MA'} // Object literal
const today = new Date(); // Date object


// TYPE CONVERSION
(new Date()).toString();
String(new Date());
parseInt('100.30'); // 100
(parseFloat('100.305')).toFixed(5); // 100.30500
