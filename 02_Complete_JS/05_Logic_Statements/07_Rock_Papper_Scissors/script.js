var rockBtn = document.getElementById('rok');
var peperBtn = document.getElementById('pap');
var scissorsBtn = document.getElementById('sci');
var stdOut = document.getElementById('stdout');
var computer = "Something Went Wrong"
var player = "Something Went Wrong"
var stdOut2 = document.getElementById('stdout2')
var choises = ["Rock", "Papper", "Scissors"]


rockBtn.addEventListener('click', function(){
  player = choises[0];
  shuffle();
  check(player)
});

peperBtn.addEventListener('click', function(){
  player = choises[1];
  shuffle();
  check(player)
});

scissorsBtn.addEventListener('click', function(){
  player = choises[2];
  shuffle();
  check(player)
});

function check(p) {
  if (p == computer) {
    stdOut.innerHTML = "Tie"
    stdOut2.innerHTML = ""
  } else {
    if ((p == choises[0]) && (computer == choises[1])) {
      stdOut.innerHTML = computer + " beats " + p
      stdOut2.innerText = 'Computer Wins'
    } else if ((p == choises[1]) && (computer == choises[2])) {
      stdOut.innerHTML = computer + " beats " + p
      stdOut2.innerText = 'Computer Wins'
    }else if ((p == choises[2]) && (computer == choises[0])) {
        stdOut.innerHTML = computer + " beats " + p
        stdOut2.innerText = 'Computer Wins'
    } else {
      stdOut.innerText = 'Player Wins'
      stdOut2.innerText = "Congratulations!"
    }
  }
}

function shuffle() {
  var r = Math.floor(3*Math.random());
  switch (r) {
    case 0:
      computer = choises[0]
      break;
        case 1:
          computer = choises[1]
          break;
            case 2:
              computer = choises[2]
              break;
    default:
      alert('Error')
  }
}
