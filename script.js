const ROUNDS = 5;

function getComputerChoice () {
    const CHOICE = ["rock", "paper", "scissors"]
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function getHumanChoice () {
    let humanChoice;

    return humanChoice = prompt("Rock, Paper, Scissors: ", "Your move...").toLowerCase();
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    const BEATS = {rock: "scissors", paper: "rock", scissors: "paper"};

    console.log("Player: " + humanChoice)
    console.log("Computer: " + computerChoice)

    if (humanChoice === computerChoice){
        console.log("Tie")
    }else if (BEATS[humanChoice] === computerChoice){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
    }else{
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".")
    }

    console.log("SCORES: Player: " + humanScore + "| Computer: " + computerScore)
    }

    for (let i = 0; i != ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore) {
        console.log("You won the game!")
    }else if(computerScore > humanScore) {
        console.log("You lose the game!")
    }else {
        console.log("The game is tie!")
    }

}

playGame();
