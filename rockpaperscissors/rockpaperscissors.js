let humanScore = 0;
let computerScore = 0;
let totalScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getHumanChoice(){
    let humanInput = prompt("Enter Rock, Paper, or Scissors: ")
    humanInput = humanInput.toLowerCase();
    let humanNumber;
    if (humanInput == "rock") {
        humanNumber = 0;
    } else if (humanInput == "paper") {
        humanNumber = 1;
    } else if (humanInput == "scissors") {
        humanNumber = 2;
    } else {
        console.log("Invalid value try again.");
        playRound();
    }
    return humanNumber;
}

function playRound(humanChoice, computerChoice){
if (humanChoice == 0 && computerChoice == 0) {
    console.log("Tie. Rock ties with Rock");
} else if (humanChoice == 0 && computerChoice == 1){
    console.log("You lose! Rock loses to paper.");
    computerScore += 1;
    totalScore += 1
} else if (humanChoice == 0 && computerChoice == 2) {
    console.log("You Win! Rock beats scissors.");
    humanScore += 1;
    totalScore += 1;
} else if (humanChoice == 1 && computerChoice == 0) {
    console.log("You Win! Paper beats rock.");
    humanScore += 1;
    totalScore += 1;
} else if (humanChoice == 1 && computerChoice == 1) {
    console.log("Tie. Paper ties with paper.");
} else if (humanChoice == 1 && computerChoice == 2) {
    console.log("You Lose! Paper loses to scissors");
    computerScore += 1;
    totalScore += 1;
} else if (humanChoice == 2 && computerChoice == 0) {
    console.log("You Lose! Scissors loses to rock.");
    computerScore += 1;
    totalScore += 1;
} else if (humanChoice == 2 && computerChoice == 1) {
    console.log("You Win! Scissors beats paper.");
    humanScore += 1;
    totalScore += 1;
} else if (humanChoice == 2 && computerChoice == 2) {
    console.log("Tie. Scissors ties with scissors.")
} else {
    console.log("invalid values");
}
}

function playGame() {
    while (totalScore !== 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won out of 5 rounds!");
    } else {
        console.log("You lost out of 5 rounds!");
    }
}

playGame();
