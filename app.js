const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let computerScore = document.querySelector('.cScore');
let playerScore = document.querySelector('.pScore');

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
    if(playerChoice == computerChoice)
        return "Tie game!";
    else if(playerChoice == "s" && computerChoice == "r"){
        cScorer();
        return "Computer wins!";
    }
    else if(playerChoice == "s" && computerChoice == "p"){
        pScorer();
        return "Player wins!";
    }
    else if(playerChoice == "p" && computerChoice == "r"){
        pScorer();
        return "Player wins!";
    }
    else if(playerChoice == "p" && computerChoice == "s"){
        cScorer();
        return "Computer wins!";
    }
    else if(playerChoice == "r" && computerChoice == "s"){
        pScorer();
        return "Player wins!";
    }
    else if(playerChoice == "r" && computerChoice == "p"){
        cScorer();
        return "Computer wins!";
    }
}

function pScorer(){
    let number = parseInt(playerScore.textContent);
    number++;
    playerScore.textContent = number;
}

function cScorer(){
    let number = parseInt(computerScore.textContent);
    number++;
    computerScore.textContent = number;
}



function game(){

    while()
}
