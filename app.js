const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let computerScore = document.querySelector('.cScore');
let playerScore = document.querySelector('.pScore');
let update = document.querySelector('.update');

function getComputerChoice(){
    let choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * (3 - 0) + 0)];
}

function playerChoice(choice){
    return choice;
}

rock.addEventListener('click', () => {
    console.log(playRound("r", getComputerChoice()));
});

paper.addEventListener('click', () => {
    console.log(playRound("p", getComputerChoice()));
});

scissors.addEventListener('click', () => {
    console.log(playRound("s", getComputerChoice()));
});


function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        update.textContent = "Tie!";
        return "Tie game!";
    }
    else if(playerChoice == "s" && computerChoice == "r"){
        cScorer();
        game();
        return "Computer wins!";
    }
    else if(playerChoice == "s" && computerChoice == "p"){
        pScorer();
        game();
        return "Player wins!";
    }
    else if(playerChoice == "p" && computerChoice == "r"){
        pScorer();
        game();
        return "Player wins!";
    }
    else if(playerChoice == "p" && computerChoice == "s"){
        cScorer();
        game();
        return "Computer wins!";
    }
    else if(playerChoice == "r" && computerChoice == "s"){
        pScorer();
        game();
        return "Player wins!";
    }
    else if(playerChoice == "r" && computerChoice == "p"){
        cScorer();
        game();
        return "Computer wins!";
    }
}

function pScorer(){
    let number = parseInt(playerScore.textContent);
    number++;
    playerScore.textContent = number;
    update.textContent = "Player wins!";
}

function cScorer(){
    let number = parseInt(computerScore.textContent);
    number++;
    computerScore.textContent = number;
    update.textContent = "Computer wins!";
}

function game(){
    let pNum = parseInt(playerScore.textContent);
    let cNum = parseInt(computerScore.textContent);
    
    if (cNum >= 5){
        update.textContent = "Computer wins out of 5!";
        console.log("Computer wins out of 5!");
        return true;
    }
    else if (pNum >= 5){
        update.textContent = "Player wins out of 5!";
        console.log("Player wins out of 5!");
        return true;
    }
    return false;

}

