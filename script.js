function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  let playerSelection = document.querySelectorAll("button");
  playerSelection.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id, getComputerChoice());
    });
  });

  function playRound(playerChoice, computerChoice) {
    let choices =
      "Player chose: " + playerChoice + "| Computer chose: " + computerChoice;

    if (playerChoice === computerChoice) {
      let roundResult = "It's a tie!";
      document.querySelector("div.round-result").textContent = roundResult;
    } else if (
      (playerChoice === "ROCK" && computerChoice === "PAPER") ||
      (playerChoice === "SCISSORS" && computerChoice === "ROCK") ||
      (playerChoice === "PAPER" && computerChoice === "SCISSORS")
    ) {
      let roundResult = "Computer wins this round!";
      computerScore++;
      document.querySelector("div.round-result").textContent = roundResult;
      let score =
        "SCORE: Player = " + playerScore + " | Computer = " + computerScore;
      document.querySelector("div.score").textContent = score;

      if (playerScore < 5 && computerScore === 5) {
        let result = "Computer wins!";
        document.querySelector("div.result").textContent = result;
      }
    } else {
      let roundResult = "Player wins this round!";
      playerScore++;
      document.querySelector("div.round-result").textContent = roundResult;
      let score =
        "SCORE: Player = " + playerScore + " | Computer = " + computerScore;
      document.querySelector("div.score").textContent = score;

      if (playerScore === 5 && computerScore < 5) {
        let result = "Player wins!";
        document.querySelector("div.result").textContent = result;
      }
    }
    document.querySelector("div.choices").textContent = choices;
  }
}

playGame();
