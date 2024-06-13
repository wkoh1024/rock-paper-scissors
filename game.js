let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 1/3) {
        return 'paper';
    }
    else if (computerChoice <= 2/3){
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
        // map used to navigate responses; function itself not called since they would be called 
        // immediately so function names stored instead
        const outcomes = {
            'rock' : { 'scissors' : winText, 'paper' : lossText, 'rock' : 'Tie.'},
            'scissors' : { 'paper' : winText, 'rock' : lossText, 'scissors' : 'Tie.'},
            'paper' : { 'rock' : winText, 'scissors' : lossText, 'paper' : 'Tie.'}
        }
        result = outcomes[humanChoice][computerSelection];
        // checks if result is helper function and only calls them officially if they are
        // otherwise, we just log, which will always be 'Tie.'
        if (typeof result === 'function') {
            console.log(result());
        }
        else {
            console.log(result);
        }
        // switch (humanChoice) {
        //     case ('scissors'):
        //         if (computerSelection === 'rock') {
        //             console.log(lossText());
        //         }
        //         else if (computerSelection === 'paper') {
        //             console.log(winText());
        //         }
        //         else
        //             console.log("Tie.");
        //         break;
        //     case ('rock'):
        //         if (computerSelection === 'paper') {
        //             console.log(lossText());
        //         }
        //         else if (computerSelection === 'scissors') {
        //             console.log(winText());
        //         }
        //         else
        //             console.log("Tie.");
        //         break;
        //     case ('paper'):
        //         if (computerSelection === 'rock') {
        //             console.log(winText());
        //         }
        //         else if (computerSelection === 'scissors') {
        //             console.log(lossText());
        //         }
        //         else
        //             console.log("Tie.");
        //         break;
        //     default:
        //         return "Invalid choice. Try again."
        // }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Final Scores\n" + 
        "Player Score: " + humanScore + "\n" + 
        "Computer Score: " + computerScore
    )

}

playGame();