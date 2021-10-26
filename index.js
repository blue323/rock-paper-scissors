let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let winner = document.getElementById("winner");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rock = document.getElementById("rock");
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let button = document.querySelector("button");

function computerPlay() {
    const choice = ["rock", "paper", "scissor"]

    let pick = Math.floor(Math.random() * choice.length)
    return choice[pick]
}

function playSingleRound(computerChoicee, playerChoicee) {
    if(computerScore <=4 && playerScore <=4) {
        if( computerChoicee === "rock" && playerChoicee === "scissor" || 
        computerChoicee === "paper" && playerChoicee === "rock" ||
        computerChoicee === "scissor" && playerChoicee === "paper"
        ) {
            computerScore++;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`;
            winner.textContent = "Round Winner: Computer!";
        } else if( computerChoicee === playerChoicee) {
            winner.textContent = "Round Winner: It's a draw!";
        } else if(  playerChoicee === "rock" && computerChoicee === "scissor" || 
                    playerChoicee === "paper" && computerChoicee === "rock" ||
                    playerChoicee === "scissor" && computerChoicee === "paper") {
            playerScore++;
            playerScoreDisplay.textContent = `Player: ${playerScore}`;
            winner.textContent = "Round Winner: You!";
        }
    } 
}

function play(playerChoice) {
    computerChoice= computerPlay();
    playSingleRound(computerChoice, playerChoice)
    checkWinner()
}

function checkWinner() {
    if(computerScore === 5) {
        winner.textContent = "Computer won this game!!!";
        button.style.visibility = "visible";
    } else if(playerScore === 5) {
        winner.textContent = "You won this game!!!";
        button.style.visibility = "visible";
    }
}

paper.addEventListener("click", () => play("paper"));

scissor.addEventListener("click", () => play("scissor"));

rock.addEventListener("click", () => play("rock"));

button.addEventListener("click", () => {
    computerScoreDisplay.textContent = `Computer: 0`;
    playerScoreDisplay.textContent = `Player: 0`;
    winner.textContent = "Round Winner: ";
    playerScore = 0;
    computerScore = 0;
    button.style.visibility = "hidden";
})
