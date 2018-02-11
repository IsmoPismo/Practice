var button1 = document.querySelector('#btn-1');
var button2 = document.querySelector('#btn-2');
var display1 = document.querySelector('#std-out1');
var display2 = document.querySelector('#std-out2');
var winner1 = document.querySelector('.sidebar1')
var winner2 = document.querySelector('.sidebar2')
var resetBtn = document.querySelector('.reset')

var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;


button1.addEventListener("click", function() {
  if (!gameOver) {
    player1Score++;
    if (player1Score == winningScore) {
      winner1.classList.add('winner');
      gameOver = true;
      resetBtn.classList.add('reset-button')
    }
    display1.innerText = player1Score;
  }
});

button2.addEventListener("click", function() {
  if (!gameOver) {
    player2Score++;
    if (player2Score == winningScore) {
      winner2.classList.add('winner');
      gameOver = true;
      resetBtn.classList.add('reset-button')
    }
    display2.innerText = player2Score;
  }
});

resetBtn.addEventListener("click", function() {
    player1Score = 0;
    player2Score = 0;
    gameOver = false;
    winner1.classList.remove('winner');
    winner2.classList.remove('winner');
    display1.innerText = player1Score;
    display2.innerText = player2Score;
    resetBtn.classList.remove('reset-button')
});
