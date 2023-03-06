const choices = ["rock", "paper", "scissors"];
const scores = [0, 0];

const playRound = (player) => {
  // Computer choice
  const random = Math.floor(Math.random() * 3);
  const computerSelection = choices[random];

  console.log(`player selection = ${player}`);
  console.log(`computer selection = ${computerSelection}`);

  // Determine winner and print
  let message = "";
  switch (player) {
    case "rock":
      if (computerSelection === "paper") {
        scores[1]++;
        message = "Paper beats Rock, you lose!";
        break;
      } else if (computerSelection === "scissors") {
        scores[0]++;
        message = "Rock beats Scissors, you win!";
        break;
      } else {
        message = "It's a draw!";
        break;
      }

    case "paper":
      if (computerSelection === "rock") {
        scores[0]++;
        message = "Paper beats Rock, you win!";
        break;
      } else if (computerSelection == "scissors") {
        scores[1]++;
        message = "Scissors beats paper, you lose!";
        break;
      } else {
        message = "It's a draw!";
        break;
      }

    case "scissors":
      if (computerSelection === "rock") {
        scores[1]++;
        message = "Rock beats Scissors, you lose!";
        break;
      } else if (computerSelection === "paper") {
        scores[0]++;
        message = "Scissors beats paper, you win!";
        break;
      } else {
        message = "It's a draw!";
        break;
      }
  }

  const player_score = document.querySelector(".player-score");
  player_score.innerText = scores[0];

  const computer_score = document.querySelector(".computer-score");
  computer_score.innerText = scores[1];

  const result = document.querySelector(".message");
  result.innerText = message;
};

const buttons = document.querySelectorAll("button");

// Add an event listener for each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
