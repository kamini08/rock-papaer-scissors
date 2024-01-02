
var playerScore = 0;
var compScore = 0;
const scoreBoard = document.querySelector('.score-board');

let isGameOver = false;

function getRandomChoice() {
    let getRandom = Math.floor(Math.random() * 3);
    if(getRandom==0) {
        return 'rock';
    } else if(getRandom==1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

var player = document.getElementsByClassName("playerScore")[0];
var computer = document.getElementsByClassName("computerScore")[0];
var updateChoice = document.getElementsByClassName("choice")[0];


function gameReset() {
    isGameOver=false;
    document.getElementsByClassName("finalWindow")[0].style.opacity = 0;
    let finalWinner
    playerScore = 0;
    compScore = 0;
    updateChoice.innerText = "Make Your Choice";
    checkScore();


}


function finalScore() {

    document.getElementsByClassName("finalWindow")[0].style.opacity = 1;
    let finalWinner = document.getElementsByClassName("finalWindow")[0].firstChild;
    if(playerScore == 5) {
        finalWinner.textContent="You Won!";
    } else {
        finalWinner.textContent="Computer Won!";
    }
    document.getElementsByClassName("startAgain")[0].addEventListener("click", () => {
        gameReset();
    } )
}


function checkScore() {
    if (playerScore == 5 || compScore == 5 || isGameOver ==true) {

        isGameOver=true;
        finalScore();
        
    } else {
        var newPlayerPoint = document.createElement('span');
        var newCompPoint = document.createElement('span')
        newPlayerPoint.appendChild(document.createTextNode(playerScore)); 
        newCompPoint.appendChild(document.createTextNode(compScore));
        let queMark1 = player.firstElementChild;
        let queMark2 = computer.firstElementChild;
        queMark1.remove();
        queMark2.remove();
        player.prepend(newPlayerPoint);
        computer.prepend(newCompPoint);

    }
}

function gameRound(playerChoice) {
    if(!isGameOver) { 
        let computerChoice = getRandomChoice();
        

        if(playerChoice===computerChoice) {
            updateChoice.textContent = "It's a tie...";
        } else if(
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            updateChoice.textContent = "You Won!";
            
            checkScore();
            playerScore++;
        } else {
            updateChoice.textContent = "Computer Won!";
            checkScore();
            compScore++;
        }

    }
}

document.getElementById('rock').addEventListener('click', () => {
    gameRound('rock');
})
document.getElementById('paper').addEventListener('click', () => {
    gameRound('paper');
})
document.getElementById('scissors').addEventListener('click', () => {
    gameRound('scissors');
})
