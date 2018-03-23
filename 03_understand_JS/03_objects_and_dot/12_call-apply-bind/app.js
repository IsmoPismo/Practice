var person = {
  fName: 'Ismo',
  lName: 'Pismo',
  getFullName: function(){
    var fullName = this.fName + ' ' + this.lName;
    return fullName;
  }
};

var logName = function(lang1, lang2){
  console.log("_____________");
  console.log('logged ' + this.getFullName());
  console.log('Arguments ' +  lang1 + ' ' + lang2);
};

var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {

  console.log("_____________");
  console.log('logged ' + this.getFullName());
  console.log('Arguments ' +  lang1 + ' ' + lang2);

}).apply(person, ['es', 'en']);


// FUNCTION BORROWING

var person22 = {
  fName: 'Ćazim',
  lName: 'Ćatić'
};

console.log("__________________");
console.log(person.getFullName.apply(person22));


// FUNCTION CURRYING

function multiply(a, b){
  return a*b;
}

var byTwo = multiply.bind(this, 2);
console.log(byTwo(5));

var byTrhre = multiply.bind(this, 3);
console.log(byTrhre(5));
