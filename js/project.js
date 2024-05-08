// Declare player score variable

let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;
const maxRound = 5;

//player input

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const divResult = document.getElementById('results')

rockButton.addEventListener('click' , () => {
  const computerChoice = getComputerChoice();
  const text = "rock";
  const result = playRound(text ,computerChoice)
  updateUi(result);
});
paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const text = "paper";
  const result = playRound(text , computerChoice)
  updateUi(result);
});
scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const text = "scissors";
  const result = playRound(text , computerChoice)
  updateUi(result);
});

//result data
function updateUi (result) {
  for (i= 0 ; i < 6 ;i++){
    divResult.textContent = `${result.result} , Your Score is ${result.humanScore} And Computer score is ${result.computerScore}`;
    if(roundPlayed > 5 ) 
    {
      divResult.textContent = '';
    } else if (roundPlayed === maxRound) {
      let finalResult = winner(result.humanScore ,result.computerScore);
      divResult.textContent = finalResult;
  
    }

    }

}

//computer input

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result == 0) {
     return "paper";
  } else if (result == 2) {
    return "rock";
  } else if (result == 1) {
    return "scissors";
  }


}

//Count the Score And Rounds 
//To know who win each round

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
    roundPlayed += 1;

    return { result: win, humanScore, computerScore };
  } else {
    computerScore += 1;
    roundPlayed += 1;
    return { result: lose, humanScore, computerScore };
  }
}


function winner (humanScore , computerScore) {

    if(humanScore > computerScore) {
  return `After 5 round You are the final Winner`
    }else if (computerScore > humanScore) {
    return `After 5 round You Lose`
    } else {
      return "after 5 round , its Draw"
    }
 
}