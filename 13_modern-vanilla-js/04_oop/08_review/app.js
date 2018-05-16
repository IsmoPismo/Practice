// Function constructor and this
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '9-10-1981');
console.log(`Brad age: ${brad.calculateAge()}`);


// Useless constructors
const name2 = new String('Jeff');
const num2 = new Number(5);
const getSum2 = new Function('x','y', 'return 1 + 1');
const john2 = new Object({name: "John"});
const arr2 = new Array(1,2,3,4);
const re2 = new RegExp('\\w+');
