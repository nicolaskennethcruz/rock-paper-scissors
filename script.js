const CHOICE = ["Rock", "Paper", "Scissors"];
const BEATS = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"}

function getComputerChoice() {
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function getHumanChoice() {
    let choice;
    while (choice === undefined) {
        choice = CHOICE[Number(prompt("0: Rock, 1: Paper, 2: Scissors"))];
    }
    return choice;
}

function displayWinner(player, computer) {
    if (player === computer) {
        console.log("Tie");
    }
    else if (BEATS[player] === computer) {
        console.log("Player wins");
    }
    else {
        console.log("Computer wins");
    }
}

const player = getHumanChoice();
const computer = getComputerChoice();


console.log("Player: " + player)
console.log("Computer: " + computer);

displayWinner(player, computer);