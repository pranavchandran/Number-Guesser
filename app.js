// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

// play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    console.log(guess)
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number between ${min} and ${max}`,'red')
    }

    // check if won
    if(guess===winningNum){
        gameOver(true,`${winningNum} is correct, YOU WIN`);
        // disable input
        // guessInput.disabled = true;
        // // change border color
        guessInput.style.borderColor = 'green';
        // // set message
        // setMessage(`${winningNum} is correct, YOU WIN`,'green');
    }else{
        guessesLeft -= 1;
        if(guessesLeft===0){

            // gameover-lost
            gameOver(false,`Gameover you lost. the correct number
            is ${winningNum}`);
            // guessInput.disabled = true;
            // change border color
            // guessInput.style.borderColor = 'red';
            // set message
            // setMessage(`Gameover you lost. the correct number
            // is ${winningNum}`,'red');
        }else{
            // game continues-answer wrong

            // change border color
            guessInput.style.borderColor = 'red';

            // clearinput
            guessInput.value='';
            // tell user its the wrong number
            setMessage(`${guess} is not correct,${guessesLeft} guesses left`,'red');
        }
    }
});

// gameover
function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'color';
    // set text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // playagain?
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again';
}

// get winning number
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// setmessage

function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}