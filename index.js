/*
This will be a console based game, no GUI
1. Welcome message + call to action for user
2. Calculate opponent (random).
3. Prompt user to enter their action either rock/paper/scissors or 1/2/3.
4. Compare opponents choice with players to see which is winning (rock > scissors, paper > rock, scissors > paper)
5. Keep tally of wins between player and opponent.
6. Repeat for best of 3 or other amount.
7. Once winner is determined, prompt user if they'd like to play again
*/

function getComputerChoice() {
  const CHOICES = ["rock", "paper", "scissors"];

  let index = Math.floor(Math.random() * 3);
  return CHOICES[index];
}

function getHumanChoice() {
  let choice = prompt("What will you throw?");
  choice = choice.toLowerCase();
  choice = choice.trim();

  if (choice != "rock" && choice != "paper" && choice != "scissors") {
    alert("Invalid answer. Try again!");
    return getHumanChoice();
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  let winMsg = `You win! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;
  let loseMsg = `You lose! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} loses to ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;
  let tieMsg = `You tied! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} is equal to ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;

  if (humanChoice === computerChoice) {
    console.log(tieMsg);
    return "tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(winMsg);
    return "win";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(winMsg);
    return "win";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(winMsg);
    return "win";
  } else {
    console.log(loseMsg);
    return "lose";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  console.log("Welcome to Rock Paper Scissors. Best of 5 wins.");

  while (humanScore < 3 && computerScore < 3) {
    let playerWon = playRound(getHumanChoice(), getComputerChoice());
    if (playerWon === "lose") {
      computerScore++;
    } else if (playerWon === "win") {
      humanScore++;
    }
  }

  let finalMsg =
    humanScore > computerScore
      ? `Congratulations you won the game!`
      : `You lost the game. Better luck next time!`;

  console.log(finalMsg);
}

playGame();
