function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        console.log("Rock");
        return "rock";    
    }
    else if(choice === 1) {
        console.log("Paper");
        return "paper";
    }
    else {
        console.log("Scissors");
        return "scissors";
    }
}

function getPlayerChoice() {
    const playerChoice = prompt("Choose between rock, paper, or scissors").toLowerCase();
    switch(playerChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";

    }
}

function playRound(playerSelection, computerSelection) {

}


const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);