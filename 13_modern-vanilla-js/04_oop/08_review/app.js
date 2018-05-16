// Function constructor and this
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
}


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



// Object.create
const personPrototypes = {
  greeting: function(){
    console.log(`Hello there ${this.firstName} ${this.lastName}`);
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const larisa = Object.create(personPrototypes, {
  firstName: {value: 'Larisa'}
});
larisa.lastName = 'Brkić';
larisa.getsMarried('Šaćirović');
