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
   if (playerSelection === computerSelection) {
    console.log("It's a tie!");   
    return "tie";
   }
   else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win, Rock beats Scissors!");
    return "win";   
   }
   else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose, Paper beats Rock!");   
    return "lose";
   }
   else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win, Rock beats Scissors!");
    return "win";
}
   else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose, Scissors beats Paper!");
    return "lose";
}
   else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win, Scissors beats Paper!");
    return "win";
}
   else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose, Rock beats Scissors!");
    return "lose";
   }
   else { 
    return "bad input";
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