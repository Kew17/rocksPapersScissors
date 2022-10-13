
function playerChoice() {
    let playerChoice = prompt('Rocks, papers or scissors?')
    return(playerChoice)
}

let choices = ['rock','paper','scissor'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
    console.log(choices)
}

function playRound(playerChoice,computerChoice) {
    if (playerChoice===computerChoice) {
        console.log("That's a tie, play again!")
    }
    else if ( 
        (playerChoice == 'rock' && computerChoice == 'paper') || 
        (playerChoice == 'scissor' && computerChoice == 'rock') ||
        (playerChoice == 'paper' && computerChoice == 'scissor')
        ){
            console.log("You Lost!");
        }
    else {
        console.log('You won!')
    }
}

function game() {
    playerChoice = playerChoice();
    console.log(`player choice is ${playerChoice}`);
    computerChoice = getComputerChoice();
    console.log(`computer choice is ${computerChoice}`);
    playRound(playerChoice,computerChoice);
}