var output = document.getElementById("output");
var people = ["Ismar", "Larisa", "Aria"]

for (i=0; i<people.length; i++)
{
    output.innerHTML += people[i]+"<br>"
}

output.innerHTML += "------------<br>"

for (i=(people.length - 1); i>=0; i--){
    output.innerHTML += people[i]+"<br>"
}

output.innerHTML += "------------<br>"

var x = 0
while (people[x]) {
    output.innerHTML += people[x]+"<br>"
    x++
}

output.innerHTML += "------------<br>"

for (value of people) {
  output.innerHTML += value+"<br>"
}
