const CHOICES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
 return CHOICES[Math.floor(Math.random() * 3 + 1)];
}

function playRound(playerSelection, computerSelection) {
  let result = "You ";
  let computerChoice = computerSelection.toUpperCase();

  playerSelection = playerSelection.toUpperCase();
  if(playerSelection === computerSelection) {
    result += "Draw!"
  } else if (
    (playerSelection == "ROCK" && computerChoice == "SCISSORS") 
    || (playerSelection == "PAPER" && computerChoice == "ROCK")
    || (playerSelection == "SCISSORS" && computerChoice == "PAPER")
  ) {
    playerScore++;
    result  += `Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result += `Lose! ${computerSelection} beats ${playerSelection}.`;
  }

  return result;
}

function game() {
  while(playerScore < 3 && computerScore < 3) {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    console.log(playRound(playerChoice, getComputerChoice()));
  }

  if(playerScore == 3) {
    console.log("Congratulations! You win!");
  } else {
    console.log("You lose. Better luck next time!");
  }
}

function capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
}