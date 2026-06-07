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

function playRound(humanChoice, computerChoice) {
  let winMsg = `You win! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;
  let loseMsg = `You lose! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} loses to ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;
  let tieMsg = `You tied! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} is equal to ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)}.`;

  let roundMsg = document.createElement("p");

  if (humanChoice === computerChoice) {
    roundMsg.textContent = tieMsg;
    resultList.appendChild(roundMsg);
    return "tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundMsg.textContent = winMsg;
    resultList.appendChild(roundMsg);
    return "win";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundMsg.textContent = winMsg;
    resultList.appendChild(roundMsg);
    return "win";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundMsg.textContent = winMsg;
    resultList.appendChild(roundMsg);
    return "win";
  } else {
    roundMsg.textContent = loseMsg;
    resultList.appendChild(roundMsg);
    return "lose";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const btn = document.querySelector("#buttons");

  btn.addEventListener("click", (e) => {

    if (humanScore >= 5 || computerScore >= 5){
      return;
    }

    let choice = e.target.textContent.toLowerCase();
    let hasPlayerWon = playRound(choice, getComputerChoice());

    if (hasPlayerWon === "lose") {
      computerScore++;
      cpuScoreTxt.textContent = `CPU Score: ${computerScore}`;
    } else if (hasPlayerWon === "win") {
      humanScore++;
      humanScoreTxt.textContent = `Human Score: ${humanScore}`;
    }
    if (humanScore >= 5) {
      outcomeTxt.textContent = "Congratulations you won the game!";
    } else if (computerScore >= 5) {
      outcomeTxt.textContent = "You lost the game. Better luck next time!";
    }
  });
}

const humanScoreTxt = document.querySelector(".human-score");
const cpuScoreTxt = document.querySelector(".cpu-score");
const resultList = document.querySelector(".results");
const outcomeTxt = document.querySelector("#outcome");

playGame();
