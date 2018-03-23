var array = ["Ismar", "Larisa", "Pinđa"]
var question = prompt("What's your Name?")
var a = document.getElementById('id')
array.indexOf(question) < 0 ? a.innerText = "Acces DENIED!" : a.innerText = "Welcome Back..." 
