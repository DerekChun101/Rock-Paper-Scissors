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
        return("You win! Rock beats Scissors");
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return("You lose! Paper beats Rock");
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        return("Tie!");
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return("You win! Paper beats Rock");
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        return("Tie!");
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose! Scissors beats Paper");
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats Scissors");
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! Scissors beats Paperg");
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return("Tie!");
    }
}

function game() {
    let round = 0;
    
    while(round < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        round++;   
    }
}


game();

