class Person {
  constructor(name){
    this.name = name;
  }

  greeting(){
    document.querySelector('h1').innerText = `Hi ${this.name}`
  }

  static addNumbers(a, b){
    console.log(a + b);
  }
}

const ismo = new Person('Ismar');
ismo.greeting();
Person.addNumbers(5, 5)
