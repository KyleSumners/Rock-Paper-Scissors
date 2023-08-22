const choices = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice() {
 return choices[Math.floor(Math.random() * 3 + 1)];
}

function playRound(playerSelection, computerSelection) {
  let result = "You ";

  playerSelection = playerSelection.toUpperCase();
  if(playerSelection === computerSelection) {
    result += "Draw!"
  } else if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") 
    || (playerSelection == "PAPER" && computerSelection == "ROCK")
    || (playerSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    result  += `Win! ${playerSelection} beats $`
  }
}

function Capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
}