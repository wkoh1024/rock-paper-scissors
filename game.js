playerWins = 0;
computerWins = 0;
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
    
    function lossText() {
        computerWins++;
        return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
        " beats " + playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1);
    }
    function winText() {
        playerWins++;
        return "You win! " + playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1) +
        " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    }
    console.log("Player Wins: " + playerWins + "\nComputer Wins: " + computerWins)
    switch (playerSelection) {
        case ('scissors'):
            if (computerSelection === 'rock') {
                return lossText();
            }
            else if (computerSelection === 'paper') {
                return winText();
            }
            else
                return "Tie."
        case ('rock'):
            if (computerSelection === 'paper') {
                return lossText();
            }
            else if (computerSelection === 'scissors') {
                return winText();
            }
            else
                return "Tie."
        case ('paper'):
            if (computerSelection === 'rock') {
                return winText();
            }
            else if (computerSelection === 'scissors') {
                return lossText();
            }
            else
                return "Tie.";
        default:
            return "Invalid choice. Try again."
    }
}

console.log(roundStart('scissors','rock'));
console.log(roundStart('scissors','paper'));
console.log(roundStart('scissors','scissors'));