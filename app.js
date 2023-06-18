const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

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
    else if(playerChoice == "s" && computerChoice == "r")
        return "Computer wins!";
    else if(playerChoice == "s" && computerChoice == "p")
        return "Player wins!";
    else if(playerChoice == "p" && computerChoice == "r")
        return "Player wins!";
    else if(playerChoice == "p" && computerChoice == "s")
        return "Computer wins!";
    else if(playerChoice == "r" && computerChoice == "s")
        return "Player wins!";
    else if(playerChoice == "r" && computerChoice == "p")
        return "Computer wins!";
}



function game(){

    // let pCount = 0;
    // let cCount = 0;

    // for(let i = 0; i < 5; i++){
    //     let pChoice = playerChoice();
    //     let cChoice = getComputerChoice();

    //     if(playRound(pChoice, cChoice) == "Computer wins!"){
    //         cCount += 1;
    //         console.log("Computer Wins!");
    //     }
    //     else if(playRound(pChoice, cChoice) == "Player wins!"){
    //         pCount += 1;
    //         console.log("Player Wins!");
    //     }
    //     else{
    //         console.log("Tie!");
    //     }
    // }

    // if(pCount > cCount)
    //     console.log("Player wins out 5!");
    // else if (cCount > pCount)
    //     console.log("Computer wins out of 5!")
}

game();