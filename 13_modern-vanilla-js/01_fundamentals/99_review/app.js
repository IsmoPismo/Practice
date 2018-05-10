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
const val1 = String(5); // Convert to string
const val2 = 6;
const sum = Number(val1 + val2); // Add => Convert to Number
console.log(sum); // 56
console.log(typeof sum);


//STRING METHODS
const nameStr = 'William';
const lastName = "Smith"
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

nameStr.concat(' ', lastName); // William Smith

nameStr.toUpperCase();
nameStr.toLowerCase();

nameStr.indexOf('l');
nameStr.lastIndexOf('l');

nameStr.charAt('2'); // 'l'
nameStr.charAt(nameStr.length - 1); // 'm'

nameStr.substring(0, 4); // Will

nameStr.slice(0,4); // Will
nameStr.slice(-3); // iam

str.split(' ');
tags.split(',');

str.replace('Brad', 'Jack');
str.includes('my'); // true
