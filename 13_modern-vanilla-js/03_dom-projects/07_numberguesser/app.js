let min = 3,
    max = 12,
    winningNum = 4,
    guessesLeft = 3;

const UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIinput = document.querySelector('#guess-input'),
      UIbutton = document.querySelector('#guess-value'),
      UImessage = document.querySelector('.message');

UImin.innerText = min;
UImax.innerText = max;

UIbutton.addEventListener('click', () => {
  let guess = parseInt(UIinput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    displayMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if player won/lost
  if(guess === winningNum){
    UIinput.disabled = true;
    UIinput.style.borderColor = 'green';
    displayMessage(`You won! ${winningNum} was the right number`, 'green');
  } else {

  }
});

function displayMessage(msg, col){
  UImessage.innerText = msg;
  UImessage.style.color = col;
}
