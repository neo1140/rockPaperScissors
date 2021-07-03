// Declaring global variables for scores
let playerScore = 0;
let compScore = 0;

// Function to generate a random number 
// and use it to determine computers play
function computerPlay() {

let compPlay = Math.random()
if(compPlay <= .33) {
    return "rock";
}
else if(compPlay >.33 && compPlay <= .66) {
    return "paper";
}
else {
    return "scissors";
}
}
// Function to determine winner of a round
function round(playerSelection, computerSelection) {
const results = document.querySelector('#results');
const scoreboard = document.querySelector('#scoreboard');
   if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!"; 
    results.style.color = 'black';
    return "tie";
   }
   else if (playerSelection === "rock" && computerSelection === "scissors") {
    results.textContent = "You win, Rock beats Scissors!";
    results.style.color = 'green';
    playerScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
   }
   else if (playerSelection === "rock" && computerSelection === "paper") {
    results.textContent = "You lose, Paper beats Rock!";
    results.style.color = 'red';
    compScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
   }
   else if (playerSelection === "paper" && computerSelection === "rock") {
    results.textContent = "You win, Rock beats Scissors!";
    results.style.color = 'green';
    playerScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
}
   else if (playerSelection === "paper" && computerSelection === "scissors") {
    results.textContent = "You lose, Scissors beats Paper!";
    results.style.color = 'red';
    compScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
}
   else if (playerSelection === "scissors" && computerSelection === "paper") {
    results.textContent = "You win, Scissors beats Paper!";
    results.style.color = 'green';
    playerScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
}
   else if (playerSelection === "scissors" && computerSelection === "rock") {
    results.textContent = "You lose, Rock beats Scissors!";
    results.style.color = 'red';
    compScore ++;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
   }
gameEnd(playerScore, compScore);
}   

//adding event listener to buttons, playing a round each time one is clicked
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
button.addEventListener('click', () => round(button.id, computerPlay()));
})

//Function to handle game ending;
function gameEnd(playerScore, compScore) {

const message = document.querySelector('#results');

    if(playerScore >= 5) {
    alert('You win, Congratulations!');
    playerScore = 0;
    compScore = 0;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
    message.textContent = 'Good job! Want to play again?'
    }
    
    if(compScore >= 5) {
    alert('I\m sorry, you lost this time!');
    playerScore = 0;
    compScore = 0;
    scoreboard.textContent = `Score Player = ${playerScore} Computer = ${compScore}`
    message.textContent = 'Better luck next time! Want to play again?'
    }
}

//Function to determine winner of a 5 round game
function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;
    let i = 0;
   
while(i < 5) {
    let winOrLose = round(prompt('enter rock, paper, or scissors').toLowerCase(), computerPlay());
    if(winOrLose === "bad input") {
        console.log("Bad input, please choose rock, paper, or scissors!");
    }
    else if (winOrLose === "win") {
      win ++;
      i++;
    }
    else if (winOrLose === "lose") {
      lose ++;
      i++;
  }
    else {
      draw ++;
      i++;
  }
}
  if (win > lose) {
      alert('You won!');
  }
  else if (lose > win) {
      alert('You lose!');
  }
  else {
      alert('It\'s a draw!');
  }
  console.log(`Wins: ${win} Losses: ${lose} Draws: ${draw}`);
}