

// Declare player score variable 

let humanScore = 0;
let computerScore = 0;

// write a function that give 3 different number.
//each number have a string value ("paper" , "rock" , "scissors");
function getComputerChoice() {

  result = Math.floor(Math.random() * 3)
  if (result == 0) {
    result = "paper"
  } else if (result == 2) {
    result = "rock"
  } else if (result == 1) {
    result = "scissors"
 
  }
// make the result show only the string;
  return result;
}

//player input data 
function getHumanChoice(value) {
    return value;
}



console.log(getHumanChoice(prompt("enter [Rock - Paper - Scissors]")))






