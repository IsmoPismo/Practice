var myTime = prompt("what hour is it?");

var Id = document.getElementById("id");

switch (Number(myTime)) {
  case myTime = 8:
    Id.innerHTML = "Wake up its morning";
    break;
  case myTime = 12:
    Id.innerHTML = "Go to Work";
    break;
  case myTime = 16:
    Id.innerHTML = "Go Home...";
    break;
  default:
    alert("Messages(0)")
    Id.innerHTML = "Relax...";

}
