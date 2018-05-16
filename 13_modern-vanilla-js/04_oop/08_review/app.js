// Function constructor and this
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
}

// Useless constructors
const name2 = new String('Jeff'); // you can do stuff like: >> name2.foo = 'bar'; <<
const num2 = new Number(5);
const getSum2 = new Function('x','y', 'return 1 + 1');
const john2 = new Object({name: "John"});
const arr2 = new Array(1,2,3,4);
const re2 = new RegExp('\\w+');


// Prototypes
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const ismo = new Person('Ismar', '05-26-1988');
// console.log(ismo.hasOwnProperty('name'));         // true
// console.log(ismo.hasOwnProperty('calculateAge')); // false


// Prototypal inheritance
function Customer(name, dob, number){
  // Inherit properties
  Person.call(this, name, dob);
  this.number = number;
}
// Inherit methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
