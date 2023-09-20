const CHOICES = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let playerSelection;
let computerSelection;

// Game functions
function getComputerChoice() {
 return CHOICES[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection = "") {
  let computerChoice = computerSelection.toLowerCase();

  playerSelection = playerSelection.toLowerCase();
  if(playerSelection === computerChoice) {
    roundWinner = "tie";
  } else if (
    (playerSelection == "rock" && computerChoice == "scissors") 
    || (playerSelection == "paper" && computerChoice == "rock")
    || (playerSelection == "scissors" && computerChoice == "paper")
  ) {
    roundWinner = "player";
    playerScore++;
  } else {
    roundWinner = "computer";
    computerScore++;
  }
}

function capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}

// Game UI
const buttons = document.querySelectorAll('#buttons-container button');
const winnerPara = document.querySelector('#win-message');
const choiceInfo = document.querySelector('#choices');
const playerScoreMsg = document.querySelector('#playerScore');
const computerScoreMsg = document.querySelector('#compScore');
const scores = document.querySelector("#scores");
const mainContent = document.querySelector("div");
const endMenu = document.querySelector(".invisible");
const endMsg = document.querySelector("#end-msg");
const restartBtn = document.querySelector("#restart");

buttons.forEach(function(button) {
  button.addEventListener('click', ()=> {
    playerSelection = button.id.toString();
    computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);

    if(playerScore === 5 || computerScore === 5) {
      displayEndMenu();
      return;
    }

    changeRoundMessage();
    changeInfoMessage();
    updateScores();
  });
});

function changeRoundMessage() {
  if(roundWinner === "computer") {
    winnerPara.textContent = "The computer won that one";
  } else if(roundWinner === "player") {
    winnerPara.textContent = "Nice job, you won!";
  } else {
    winnerPara.textContent = "It\'s A Tie!";
  }
}

function changeInfoMessage() {
  if(roundWinner === "computer") {
    choiceInfo.textContent = `${computerSelection} beats ${capitalize(playerSelection)}.`;
  } else if(roundWinner === "player") {
    choiceInfo.textContent = `${capitalize(playerSelection)} beats ${computerSelection}.`;;
  } else {
    choiceInfo.textContent = `You both chose ${computerSelection}`;
  }
}

function updateScores() {
  playerScoreMsg.textContent = `Player: ${playerScore}`;
  computerScoreMsg.textContent = `Computer: ${computerScore}`;
}

function displayEndMenu() {
  mainContent.classList.add("invisible");
  endMenu.classList.remove("invisible");
  endMenu.classList.add("end-menu");
  if(playerScore === 5) {
    endMsg.textContent = "Congratulations, you beat the Computer!";
  } else {
    endMsg.textContent = "Dang, better luck next time";
  }
}

restartBtn.addEventListener('click', () => {
  restartGame();
});

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  endMenu.classList.remove("end-menu");
  endMenu.classList.add("invisible");
  mainContent.classList.remove("invisible");
  updateScores();
}