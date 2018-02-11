var li = document.querySelectorAll("li");

for (var i = 0; i < li.lenth; i++) {
  li[i].addEventListener("mouseover", function() {
    this.classList.add('hover');
});

  li[i].addEventListener("click", function() {
    this.classList.add('hover');
}
