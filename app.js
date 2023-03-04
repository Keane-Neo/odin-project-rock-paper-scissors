const choices = ["rock", "paper", "scissors"];
const scores = [0, 0];

const playRound = (player, computer) => {
  let playerSelection = "";
  // Player choice
  do {
    playerSelection = prompt("rock, paper, scissors").toLowerCase();
  } while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  );

  // Computer choice
  const random = Math.floor(Math.random() * 3);
  const computerSelection = choices[random];

  console.log(`player selection = ${playerSelection}`);
  console.log(`computer selection = ${computerSelection}`);

  // Determine winner and print

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        scores[1]++;
        console.log("Paper beats Rock, you lose!");
        break;
      } else if (computerSelection === "scissors") {
        scores[0]++;
        console.log("Rock beats Scissors, you win!");
        break;
      } else {
        console.log("It's a draw!");
        break;
      }

    case "paper":
      if (computerSelection === "rock") {
        scores[0]++;
        console.log("Paper beats Rock, you win!");
        break;
      } else if (computerSelection == "scissors") {
        scores[1]++;
        console.log("Scissors beats paper, you lose!");
        break;
      } else {
        console.log("It's a draw!");
        break;
      }

    case "scissors":
      if (computerSelection === "rock") {
        scores[1]++;
        console.log("Rock beats Scissors, you lose!");
        break;
      } else if (computerSelection === "paper") {
        scores[0]++;
        console.log("Scissors beats paper, you win!");
        break;
      } else {
        console.log("It's a draw!");
        break;
      }
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `Current Score (Player - Computer) = ${scores[0]}:${scores[1]}`
    );
  }
};

game();
/* Get player Selection
Determine computer Selection
Determine winner 
print out winner

repeat for as many rounds needed */
