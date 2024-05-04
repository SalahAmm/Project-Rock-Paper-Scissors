// Declare player score variable

let humanScore = 0;
let computerScore = 0;

// write a function that give 3 different number.
//each number have a string value ("paper" , "rock" , "scissors");
function getComputerChoice() {
  result = Math.floor(Math.random() * 3);
  if (result == 0) {
    result = "paper";
  } else if (result == 2) {
    result = "rock";
  } else if (result == 1) {
    result = "scissors";
  }
  // make the result show only the string;
  return result;
}
// call the computer function

//player input data
function getHumanChoice() {
  let input = prompt("enter Rock - Paper - Scissors")
  let result = input.toLowerCase();
  return result;
}

// Write the logic to play a single round

//2---------

function playRound(humanChoice, computerChoice) {
  const win = `You Win ${humanChoice} Beat ${computerChoice}`;
  const lose = `You lose! ${computerChoice} beats ${humanChoice}`;
  const draw = "Draw";

  if (humanChoice === computerChoice) {
    return { result: draw, humanScore, computerScore };
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    return { result: win, humanScore, computerScore };
  } else {
    computerScore += 1;
    return { result: lose, humanScore, computerScore };
  }
}





//how many round it repeats until stop

function playGame(rounds) {
  if (rounds === 0) {
    return;
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  roundResult = playRound(humanSelection, computerSelection);
  console.log(roundResult.result);
  console.log(`you have ${roundResult.humanScore} Points = and the Computer has ${roundResult.computerScore} Point`);
  playGame(rounds - 1);
}
function startGame(){
  playGame(5);
}



