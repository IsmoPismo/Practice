var cup = new Object()
cup.boja = "black"
cup.kind = "bavarage-cup"
cup.material = "porcelan"
console.log(cup);

console.log(cup.boja)
console.log(cup["material"]);

var info = prompt("What information you wanna see?")
console.log(cup[info]);
