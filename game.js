let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random() * 10;
    if (computerChoice <= 10/3) {
        return 'paper';
    }
    else if (computerChoice > 10/3 && computerChoice <= 19/3){
        return 'rock';
    }
    else {
        return 'scissors';
    } 
}

function getHumanChoice() {
    let input = prompt("Pick: rock, paper, scissors");
    input = input.toLowerCase();
    while (input !== 'scissors' && input !== 'rock' && input !== 'paper') {
        input = prompt("Invalid input! Try again. Pick: rock, paper, scissors");
        input = input.toLowerCase();
    }
    return input;
}

function playGame() {
    function playRound(humanChoice, computerSelection) {
        // loss and win text function reusability
        function lossText() {
            computerScore++;
            return "You lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
            " beats " + humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1);
        }
        function winText() {
            humanScore++;
            return "You win! " + humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1) +
            " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        }
        console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore)
        switch (humanChoice) {
            case ('scissors'):
                if (computerSelection === 'rock') {
                    console.log(lossText());
                }
                else if (computerSelection === 'paper') {
                    console.log(winText());
                }
                else
                    console.log("Tie.");
                break;
            case ('rock'):
                if (computerSelection === 'paper') {
                    console.log(lossText());
                }
                else if (computerSelection === 'scissors') {
                    console.log(winText());
                }
                else
                    console.log("Tie.");
                break;
            case ('paper'):
                if (computerSelection === 'rock') {
                    console.log(winText());
                }
                else if (computerSelection === 'scissors') {
                    console.log(lossText());
                }
                else
                    console.log("Tie.");
                break;
            default:
                return "Invalid choice. Try again."
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

}

playGame();