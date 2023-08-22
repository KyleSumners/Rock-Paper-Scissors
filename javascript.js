function getComputerChoice() {
  let randomize = Math.floor(Math.random() * 3 + 1);
  let compChoice;

  switch(randomize) {
    case 1:
      compChoice = "Rock";
      break;
    
    case 2:
      compChoice = "Paper";
      break;
    
    case 3:
      compChoice = "Scissors";
      break;
    
    default:
      break;
  }

  return compChoice;
}