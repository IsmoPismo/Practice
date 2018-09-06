// const sym1 = Symbol();
// const sym2 = Symbol('sym2');
// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol('identifier1');
const KEY2 = Symbol('identifier2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// Symbols are not enumerable in for...in
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

const symObj = Object.getOwnPropertySymbols(myObj)
console.log(symObj);
console.log(Object.values(myObj));



// Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); // => {}
