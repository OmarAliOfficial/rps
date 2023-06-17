function getComputerChoice(){
    let choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * (3 - 0) + 0)];
}

function playerChoice(){
    let input = prompt("Choose your move: r for rock, p for paper, s for scissors");
    return input.toLowerCase();
}

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

    let pCount = 0;
    let cCount = 0;

    for(i = 0; i < 5; i++){
        let pChoice = playerChoice();
        let cChoice = getComputerChoice();

        if(playRound(pChoice, cChoice) == "Computer wins!"){
            cCount += 1;
            console.log("Computer Wins!");
        }
        else if(playRound(pChoice, cChoice) == "Player wins!"){
            pCount += 1;
            console.log("Player Wins!");
        }
        else{
            console.log("Tie!");
        }
    }

    if(pCount > cCount)
        console.log("Player wins out 5!");
    else if (cCount > pCount)
        console.log("Computer wins out of 5!")
}

game();