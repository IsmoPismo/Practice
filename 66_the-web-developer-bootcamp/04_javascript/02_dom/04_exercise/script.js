var backgroundColor = document.getElementById('atf');
var button = document.querySelector('button')

button.addEventListener("click", function() {
  backgroundColor.classList.toggle('green-haze');
  button.style.width = "800px";
})
