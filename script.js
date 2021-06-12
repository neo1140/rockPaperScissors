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
       return "tie";
   }
   else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "win";
   }
   else if (playerSelection === "rock" && computerSelection === "paper") {
       return "lose";
   }
   else if (playerSelection === "paper" && computerSelection === "rock") {
    return "win";
}
   else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "lose";
}
   else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "win";
}
   else if (playerSelection === "scissors" && computerSelection === "rock") {
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
    console.log(winOrLose);
    
  if (winOrLose === "win") {
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