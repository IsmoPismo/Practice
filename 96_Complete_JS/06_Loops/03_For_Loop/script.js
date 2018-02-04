var stdOut = document.getElementById('id')
var userAns = prompt("How many Bananas did you eat?")
var kCal = 89

for (var banana = 1; banana <= userAns; banana++){
  if (banana > 1) {
    stdOut.innerText += "You ate " + banana + " bananas. " + banana*kCal + " kCal\n"
  } else {
    stdOut.innerText += "You ate " + banana + " banana. " + banana*kCal + " kCal\n"
  }
}
