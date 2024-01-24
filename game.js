function getComputerChoice() {
    computerChoice = Math.random() * 10;
    if (computerChoice <= 10/3) {
        return 'Paper';
    }
    else if (computerChoice > 10/3 && computerChoice <= 19/3){
        return 'Rock';
    }
    else {
        return 'Scissors';
    } 
}

function roundStart(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection) {
        case ('scissors'):
            if (computerSelection.toLowerCase() === 'rock') {
                return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
                " beats " + playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1);
            }
            else if (computerSelection.toLowerCase() === 'paper') {
                return "You win! " + playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1) +
                " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            }
            else
                return "Tie."
    }
}

console.log(roundStart('scissors','rock'));
console.log(roundStart('scissors','paper'));
console.log(roundStart('scissors','scissors'));