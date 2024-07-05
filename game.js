const body = document.querySelector("body");
const playerOptions = document.querySelectorAll(".option");
const scoreboard = document.querySelector(".scoreboard");
const humanScoreboard = document.querySelector("#humanScore");
const computerScoreboard = document.querySelector("#computerScore");
const humanScoreText = "Human Score: ";
const computerScoreText = "Computer Score: ";
const tieOrWinnerText = document.querySelector("#tieText");


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
    return new Promise((resolve) => {
        playerOptions.forEach((button) => {
            button.addEventListener("click", () => {
                resolve(button.id);
            });
        });
    })

}
async function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    function playRound(humanChoice, computerChoice) {
        // loss and win text function reusability
        function loss() {
            tieOrWinnerText.style.display = "none";
            computerScore++;
            totalRounds++;
            computerScoreboard.textContent = computerScoreText + "" + computerScore;
        }
        function win() {
            tieOrWinnerText.style.display = "none";
            humanScore++;
            totalRounds++;
            humanScoreboard.textContent = humanScoreText + "" + humanScore;
        }
        function tie(){
            totalRounds++;
            tieOrWinnerText.style.display = "block";
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
    for (let i = 0; i < 5; i++) {
        const humanChoice = await getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore == computerScore) alert("It is a tie!");
    else {
        (humanScore > computerScore) ? alert("Human wins!") : alert("Computer wins!");
    }
}
playGame();
