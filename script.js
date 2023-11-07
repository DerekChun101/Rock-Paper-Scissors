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
            
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Make sure you spell it right");
            return getPlayerChoice();

    }
}

function playRound(playerSelection, computerSelection) { //Starts the round 
    const results = document.querySelector('#results'); //Appends result to document
    const content = document.createElement('p');
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

let round = 0;
let playerScore = 0;
let computerScore = 0;
let isButtonClick = false;

const startBtn = document.querySelector('#start'); //Start Button logic
startBtn.addEventListener('click', () => {
    if(isButtonClick === false) {
        isButtonClick = true;
        createButtons();
        game();
    }
    else {

    }
});
const restartBtn = document.querySelector('#restart'); //Restart Button logic
restartBtn.addEventListener('click',() =>  {
    resetGame();
    isButtonClick = false;
})

function createButtons () { //Dynamically produces player options
        const btnsContainer = document.querySelector('#player-buttons');
        const rock = document.createElement('button');
        const paper = document.createElement('button');
        const scissors = document.createElement('button')
        rock.innerHTML = 'Rock';
        rock.setAttribute('class', 'playerButtons');
        rock.setAttribute('id', 'rock');
        paper.innerHTML = 'Paper';
        paper.setAttribute('class', 'playerButtons');
        paper.setAttribute('id', 'paper');
        scissors.innerHTML = 'Scissors';
        scissors.setAttribute('class', 'playerButtons');
        scissors.setAttribute('id', 'scissors');
        btnsContainer.appendChild(rock);
        btnsContainer.appendChild(paper);
        btnsContainer.appendChild(scissors);
}
function game() {
    let playerSelection = '';
    const btnsContainer = document.querySelectorAll('.playerButtons') //Get buttons from document and assign it to player slection
    btnsContainer.forEach(option => {
    option.addEventListener('click', function() {
        playerSelection = this.id;
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playerSelection);
        switch(playRound(playerSelection, computerSelection)) { //determines player score by getting result from playRound
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
        if(round === 5) { //After 5 rounds display final score
            const results = document.querySelector('#results');
            const content = document.createElement('p');
        
            if(playerScore > computerScore) {
                content.innerHTML = `Player Score: ${playerScore} <br> Computer Score: ${computerScore} <br> You Win!`;
                results.appendChild(content);
            }
            else if(playerScore < computerScore) {
                content.innerHTML = `Player Score: ${playerScore} <br> Computer Score: ${computerScore} <br> You Lose!`;
                results.appendChild(content);
            }
            else {
                content.innerHTML = `Player Score: ${playerScore} <br> Computer Score: ${computerScore} <br> You Tie!`;
                results.appendChild(content);
            }
            const btnsContainer = document.querySelector('#player-buttons');
            while(btnsContainer.firstChild) {
                btnsContainer.firstChild.remove(); // Remove player options after game is finish
            }
        }
    });
    });
    
}

function resetGame() { // reset game and delete appended results
    round = 0;
    playerScore = 0;
    computerScore = 0;
    const results = document.querySelector('#results');
    while (results.firstChild) {
        results.firstChild.remove()
    }
}



