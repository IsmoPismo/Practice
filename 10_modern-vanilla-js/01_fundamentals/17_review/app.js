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
const sum2 = Number(val2 + val1);
console.log(sum); // 56
console.log(sum2); // 65
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


// TEMPLATE LITERALS
const html = `
  <ul>
    <li>Name: ${name}</li>
    <li>${2 + 2}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;


// ARRAYS
const numbers = [1,2,3,8,5,123,7,8,9];

Array.isArray(numbers); // true
numbers.push(250);
numbers.unshift(120);
numbers.pop();
numbers.shift();
numbers.splice(1,2); // (starting index, how many items)
numbers.reverse();
const howYouSortNumbers = numbers.sort((x, y) =>  x - y);
numbers.find((x) => x > 8); // 9


// OBJECT LITERALS
const person = {
  name: 'Ismo',
  age: 29,
  hobbies: ['vue', 'gym', 'youtube'],
  address: {
    city: 'Džako',
    state: 'BiH'
  },
  getBirthYear(){
    return 2017 - this.age;
  }
}


// DATE OBJECT
const thisMoment = new Date();
let bDay = new Date('05-26-1988'); // or
bDay = new Date('May 26 1988'); // or
bDay = new Date('05/26/1988');

thisMoment.getDay() // 4 - čet
thisMoment.getDate(); // 10 - 10
thisMoment.getMonth(); // 4 - May (zero-based)
thisMoment.getFullYear(); // 2018
thisMoment.getHours(); // 19
thisMoment.getMinutes(); // 55
thisMoment.getSeconds(); // 11
thisMoment.getMilliseconds(); // 605
thisMoment.getTime() // Trippy

bDay.setFullYear('1994');
bDay.setMonth(10);
bDay.setDate(9);
bDay.setHours(15);
bDay.setMinutes(30);
bDay.setSeconds(30);


// CONDITIONALS
const id = 100

if(typeof id !== 'undefined')
  console.log(`The ID is ${id}`);
else
  console.log('NO ID');


// FUNCTION-
// -DECLARATION
function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}
// -EXPRESION
const square = function(x = 3){
  return x*x;
};
// -IIFE
(function(){
  console.log('IIFE Ran..');
})();
// PROPERTY METHODS
const todo = {
  add: function(){
    console.log('Add todo..');
  },
}
todo.add();


// LOOPS
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}


// WINDOW
window.outerHeight; // but we don't have to use WINDOW
outerWidth === window.outerWidth; // true
[innerWidth, innerHeight, scrollX, scrollY, location, navigator];
window.history.go(-2);
