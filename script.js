function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0)
        console.log("Rock");
    else if(choice === 1)
        console.log("Paper");
    else
        console.log("Scissors");
}

getComputerChoice();

