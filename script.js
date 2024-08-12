function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
  // return computerChoice;
}

function getPlayerChoice() {
  return prompt(
    "Please enter your choice (ROCK, PAPER, SCISSORS.)"
  ).toUpperCase();
  //   return playerChoice.toUpperCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) console.log("It's a tie!");
  else if (
    (playerChoice === "ROCK" && computerChoice === "PAPER") ||
    (playerChoice === "SCISSORS" && computerChoice === "ROCK") ||
    (playerChoice === "PAPER" && computerChoice === "SCISSORS")
  ) {
    console.log("Computer wins this round!");
    computerScore++;
    console.log(
      "SCORE: Player = " + playerScore + " | Computer = " + computerScore
    );
  } else {
    console.log("Player wins this round!");
    playerScore++;
    console.log(
      "SCORE: Player = " + playerScore + "| Computer = " + computerScore
    );
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
