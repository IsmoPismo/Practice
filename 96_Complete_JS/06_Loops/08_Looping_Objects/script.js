var output = document.getElementById("output");
var people = {a: "Ismar",b: "Larisa",c: "Aria"}

for (var x in people) {
    output.innerHTML += x + " = " + people[x] + "<br>"
}

output.innerHTML += "------------<br>"


for (var y in document) {
  output.innerHTML += y + " = " + document[y] + "<br>"
}
