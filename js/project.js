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
  let result = prompt("enter Rock - Paper - Scissors").toLowerCase();
  return result;
}



// Write the logic to play a single round

//write the variable of each value of choice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
//2---------
function playRound(humanChoice, computerChoice) {
  let win = `You Win ${humanChoice} Beat ${computerChoice}`;
  let lose = `ou lose! ${computerChoice} beats ${humanChoice}`;
  let draw = "Draw";

  if (humanChoice === computerChoice) {

    return {result: draw , humanScore , computerScore};
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    return {result: win , humanScore , computerScore};
  } else {
    computerScore += 1;
    return {result: lose, humanScore, computerScore};
  };
  }


console.log(playRound(humanSelection , computerSelection))

function points() {
  let result = playRound();
  points = `you have ${result.humanScore} Points = and the Computer has ${result.computerScore} Point`;
    return points ;
}

console.log(points());



