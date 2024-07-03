const body = document.querySelector("body");
const playerOptions = document.querySelectorAll(".option");
const scoreboard = document.querySelector(".scoreboard");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const humanScoreText = "Human Score: ";
const computerScoreText = "Computer Score: ";
const tieOrWinnerText = document.querySelector("#tieText");
tieOrWinnerText.textContent = "Tie!"

tieOrWinnerText.style.display = "none";



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
    playerOptions.forEach((button) => {
        button.addEventListener("click", () => {
            return button.id;
        });
    });
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        // loss and win text function reusability
        function loss() {
            computerScore++;
            computerScore.textContent = computerScoreText + computerScore;
        }
        function win() {
            humanScore++;
            humanScore.textContent = humanScoreText + humanScore;
        }
        function tie(){
            tieOrWinnerText.style.display = "none";
        }
        // map used to navigate responses; function itself not called since they would be called 
        // immediately so function names stored instead
        const outcomes = {
            'rock' : { 'scissors' : win, 'paper' : loss, 'rock' : tie},
            'scissors' : { 'paper' : win, 'rock' : loss, 'scissors' : tie},
            'paper' : { 'rock' : win, 'scissors' : loss, 'paper' : tie}
        };
        result = outcomes[humanChoice][computerChoice];
        result();
    }


}
playGame();