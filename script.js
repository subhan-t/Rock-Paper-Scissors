function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerChoice = prompt(
    "Please enter your choice (ROCK, PAPER, SCISSORS.)"
  );
  return playerChoice.toUpperCase();
}
