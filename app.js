let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game is Draw, Play again";
    msg.style.backgroundColor= "yellow";
    
}

const playGame = (userChoice) =>{
    console.log("user choice is",userChoice)
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice",compChoice);


    if(userChoice === compChoice){
        drawGame();
    }
    else if(userChoice === "rock" && compChoice=== "paper"){
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = "You Lose Paper beats Rock";
        msg.style.backgroundColor= "Red";
    }
    else if(userChoice === "rock" && compChoice=== "scissors"){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = "You Won Rock beats Scissors";
        msg.style.backgroundColor= "Green";
    }
    else if(userChoice === "paper" && compChoice=== "rock"){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = "You Won Paper beats Rock";
        msg.style.backgroundColor= "Green";
    }
    else if(userChoice === "paper" && compChoice=== "scissors"){
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = "You Lose Scissors beats Paper";
        msg.style.backgroundColor= "Red";
    }
    else if(userChoice === "scissors" && compChoice=== "rock"){
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = "You Lose Rock beats Scissors";
        msg.style.backgroundColor= "Red";
    }
    else if(userChoice === "scissors" && compChoice=== "paper"){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = "You Won Scissors beats Paper";
        msg.style.backgroundColor= "Green";
    }



}

choices.forEach((choice) => {
    
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})