/*function getComputerChoice (){
  let rps = [Math.floor(Math.random()*3)];
    if (rps == 0) {
      console.log('rock');
    } else if (rps == 1) {
      console.log('paper');
    } else if (rps == 2) {
      console.log('scissors');
    }
    return 1;
  }

function getHumanChoice (){
  var choice = prompt ('rock, paper, scissors?').toLowerCase();
  console.log(choice); 
  return choice;
  }

let humanScore = 0
let computerScore = 0

//const humanChoice = getHumanChoice ();
//const computerChoice = getComputerChoice ();

/*function playRound (){
    function getComputerChoice (){
      let rps = [Math.floor(Math.random()*3)];
        if (rps == 0) {
          console.log('rock');
        } else if (rps == 1) {
          console.log('paper');
        } else if (rps == 2) {
          console.log('scissors');
        };
      };
    function getHumanChoice (){
      var choice = prompt ('rock, paper, scissors?').toLowerCase();
      console.log(choice); 
      return choice;
      };
      const humanChoice = getHumanChoice;
      const computerChoice = getComputerChoice;
  if (humanChoice == 'rock' && computerChoice == 'rock') {
  alert ('You both chose rock! Tie!')
  };
}*/

playGame();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result === "You Win!") {
      playerScore++;
    } else if (result === "You Lose!") {
      computerScore++;
    }
  }

  console.log("Final Score:");
  console.log("You:", playerScore);
  console.log("Computer:", computerScore);
}
