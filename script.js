function getComputerChoice() { //Computer Randomly returns rock paper scissors
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

function getPlayerChoice() { // Lets the player choose between rock papper and scissors
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

function playRound(playerSelection, computerSelection) { //Starts the round 
    const results = document.querySelector('#results');
    const content = document.createElement('div');
    if(playerSelection === "rock" && computerSelection === "scissors") {
        content.textContent = ("You win! Rock beats Scissors");
        results.appendChild(content);
        return 'win';

    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        content.textContent = ("You lose! Paper beats Rock");
        results.appendChild(content);
       return 'lose';
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        content.textContent = ("Tie!");
        results.appendChild(content);
        return 'tie';
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        content.textContent = ("You win! Paper beats Rock");
        results.appendChild(content);
        return 'win';
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        content.textContent = ("Tie!");
        results.appendChild(content);
        return 'tie';
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        content.textContent = ("You lose! Scissors beats Paper");
        results.appendChild(content);
        return 'lose';
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        content.textContent = ("You lose! Rock beats Scissors");
        results.appendChild(content);
        return 'lose';
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        content.textContent = ("You win! Scissors beats Paper");
        results.appendChild(content);
        return 'win';
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        content.textContent = ("Tie!");
        results.appendChild(content);
        return 'tie';
    }
    
}

/*function game() { //A Game of 5 rounds 
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    while(round < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        switch(playRound(playerSelection, computerSelection)) {
            case "win":
                playerScore++;
                break;
            case "lose":
                computerScore++;
                break;
            case "tie":
                break;
        }
        round++;
    }

    console.log(playerScore); 
    console.log(computerScore);

    if(playerScore > computerScore) {
        alert("You Won the Game!");
        console.log("Player Wins!")
    }
    else if(playerScore < computerScore) {
        alert("You Loss the Game!");
        console.log("Player loses")
    }
    else {
        alert("You Tie!")
        console.log("Player Ties")
    }
}*/
function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    
    let playerSelection = '';
    
    const playerOptions = document.querySelectorAll('.playerOptions')
    playerOptions.forEach(option => {
    option.addEventListener('click', function() {
        playerSelection = this.id;
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        switch(playRound(playerSelection, computerSelection)) {
            case "win":
                playerScore++;
                break;
            case "lose":
                computerScore++;
                break;
            case "tie":
                break;
        
        }
        round++;
        console.log(round);
        if(round === 5) {
            console.log(playerScore); 
            console.log(computerScore);
        
            if(playerScore > computerScore) {
                alert("You Won the Game!");
                console.log("Player Wins!")
            }
            else if(playerScore < computerScore) {
                alert("You Loss the Game!");
                console.log("Player loses")
            }
            else {
                alert("You Tie!")
                console.log("Player Ties")
            }
    
        }
    });
    });
    
}


game();

// const computerSelection = getComputerChoice();
// let playerSelection = '';
// console.log(computerSelection);

// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');

// rock.addEventListener('click', function() {
//     playerSelection = 'rock';
//     playRound(playerSelection, computerSelection);
// });
// paper.addEventListener('click', function() {
//     playerSelection = 'paper';
//     playRound(playerSelection, computerSelection);
// });
// scissors.addEventListener('click', function() {
//     playerSelection = 'scissors';
//     playRound(playerSelection, computerSelection);
// });

