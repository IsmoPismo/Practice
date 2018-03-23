var array = ["Ismar", "Larisa", "Pinđa"]
var question = prompt("What's your Name?")
var standardOut = document.getElementById('id')

if (array.indexOf(question) >= 0) {
  standardOut.innerText = "Hey, " + question
  var questionAge = prompt(question + ".\nHow old are you?")
  questionAge > 18 ? standardOut.innerText +="... You can enter..." : standardOut.innerText +="... You are out!"
}
else {
  standardOut.innerText = "Denied"
}
