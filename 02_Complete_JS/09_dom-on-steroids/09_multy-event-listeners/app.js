var holder = document.getElementById('holder');
var output = document.querySelector('h6');

holder.addEventListener("mouseover", function(){
  this.classList.add("active");
});

holder.addEventListener("mouseout", function(){
  this.classList.remove("active");
});

holder.addEventListener("mousemove", coordin);

function coordin(){
  output.innerHTML = "X: " + event.clientX;
  output.innerHTML += " Y: " + event.clientY;
}
