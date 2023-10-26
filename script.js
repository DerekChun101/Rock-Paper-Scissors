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
            break;
        default:
            alert("Make sure you spell it right");
            getPlayerChoice();

    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win!");
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose!");
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        alert("Tie!");
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("You win!");
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        alert("Tie!");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose!");
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose!");
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win!");
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        alert("Tie!");
    }
}


const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);