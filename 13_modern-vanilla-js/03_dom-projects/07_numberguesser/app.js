let min = 3,
    max = 12,
    winningNum = 4,
    guessesLeft = 3;

const game = document.querySelector('#game'),
      UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIinput = document.querySelector('#guess-input'),
      UIbutton = document.querySelector('#guess-value'),
      UImessage = document.querySelector('.message');

UImin.innerText = min;
UImax.innerText = max;

game.addEventListener('mousedown', function(e) {
  if(e.target.className == 'game-over'){
    location.reload();
  }
});

UIbutton.addEventListener('click', () => {
  let guess = parseInt(UIinput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    displayMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if player won/lost
  if(guess === winningNum){
    gameOver(true, `You won! ${winningNum} was the right number`, true)
  } else {
      guessesLeft -=1
      if(guessesLeft === 0){
        gameOver(false, `No more guesses left.
Correct number was: ${winningNum}`, true);
      }
      else {
        gameOver(false, `Wrong, ${guessesLeft} guesses left`, false)
      }
  }
});

function displayMessage(msg, col){
  UImessage.innerText = msg;
  UImessage.style.color = col;
}

function gameOver (won, msg, dis) {
  let col = won ? 'green' : 'red';
  UIinput.disabled = dis;
  UIinput.style.borderColor = col;
  displayMessage(msg, col);

  if(dis){
    UIbutton.value = 'Play Again';
    UIbutton.className += 'game-over';
  }
}
