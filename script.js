function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";    
    }
    else if(choice === 1) {
        return "paper";
    }
    else {
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
            return getPlayerChoice();

    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors");
        return "win";
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock");
        return "lose";
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        console.log("Tie!");
        return "tie";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock");
        return "win";
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        console.log("Tie!");
        return "tie"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper");
        return "lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors");
        return "lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper");
        return "win";
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Tie!");
        return "tie";
    }
}

function game() {
    let round = 0;
    let playerCount = 0;
    let computerCount = 0;
    while(round < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        switch(playRound(playerSelection, computerSelection)) {
            case "win":
                playerCount++;
                break;
            case "lose":
                computerCount++;
                break;
            case "tie":
                break;
        }
        round++;
    }
    console.log(playerCount);
    console.log(computerCount);
    if(playerCount > computerCount) {
        alert("You Won the Game!");
        console.log("Player Wins!")
    }
    else if(playerCount < computerCount) {
        alert("You Loss the Game!");
        console.log("Player loses")
    }
    else {
        alert("You Tie!")
        console.log("Player Ties")
    }
}


game();

