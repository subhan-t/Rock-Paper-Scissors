function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
