'use strict';

let checkBtn = document.querySelector('.check');
let hiddenNumber = document.querySelector('.number');
let againBtn=document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let scoreValue = 20;
let highScore=0;

checkBtn.addEventListener('click', function () {
  let guessInput = document.querySelector('.guess');
  let scoreMessage = document.querySelector('.score');
   
  let message = document.querySelector('.message');
  guessInput = Number(guessInput.value);

  if (!guessInput) {
    //in case of the guess input is empty
  
      message.textContent = ' 👎 you have to enter a number';
     
    
  } else if (guessInput === secretNumber) {
    // in case of the guess input is equal to secret number
    
      message.textContent = ' 🎉 correct answer';
      
      hiddenNumber.textContent = secretNumber;
      document.querySelector("body").style.backgroundColor="green";
      if(scoreValue > highScore){
        highScore=scoreValue;
        document.querySelector('.highScore').textContent=highScore;
       }
    
  } else if (guessInput > secretNumber) {
    // in case of the guess input is greater than secret number
    if (scoreValue > 0) {
    
      message.textContent = '📈 Too high!';
      scoreValue--;
      scoreMessage.textContent = scoreValue;
    } else {
    
      message.textContent = '💀 you lose the game';
      scoreMessage.textContent = 0;
    }
  } else if (guessInput < secretNumber) {
    // in case of the guess input is less than secret number
    if (scoreValue > 0) {
    
      message.textContent = '📉 Too low!';
      scoreValue--;
      scoreMessage.textContent = scoreValue;
    } else {
    
      message.textContent = '💀 you lose the game';
      scoreMessage.textContent = 0;
    }
  }
});

againBtn.addEventListener("click",function(){
    let guessInput = document.querySelector('.guess');
    let scoreMessage = document.querySelector('.score');
    let message = document.querySelector('.message');
    guessInput.value="";
    hiddenNumber.textContent = "?";
    document.querySelector("body").style.backgroundColor="#222";
    scoreValue=20;
    scoreMessage.textContent=scoreValue;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    message.textContent = 'Start guessing...';
})