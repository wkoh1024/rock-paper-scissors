function getComputerChoice() {
    computerChoice = Math.random() * 10;
    console.log(computerChoice);
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