var myTime = prompt("what hour is it?");

var Id = document.getElementById("Id");

if(myTime >= 8 && myTime < 12) {
    Id.innerHTML = "Wake up its morning";
} else if (myTime >= 12 && myTime < 13) {
    Id.innerHTML = "go to Lunch";
} else if (myTime >= 13 && myTime <= 16) {
    Id.innerHTML = "Go to work";
} else if (myTime >16 && myTime < 20) {
    Id.innerHTML = "Dinner Time";
} else if (myTime >= 22) {
    Id.innerHTML = "Time to go to sleep";
} else {
   Id.innerHTML = "You should be sleeping";
}
