let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
    
});

const playGame = (userChoice) => {
    // console.log("userChoice = ", userChoice);
    // to generate computer choice
    const comChoice = genComChoice();
    // console.log("compChoice = ", comChoice);

    if(userChoice === comChoice){
        // draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock , scissor
            userWin = comChoice === "scissor" ? false : true;
        } else{
            // user = scissor,
            // computer = rock , paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , comChoice);
    }
}

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
} 

const drawGame = () => {
    msg.innerText = "Game was draw! Try again 💀";
    msg.style.backgroundColor = "rgb(27, 29, 33)";
}

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!🎉 Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green"; 
    } else{
        compScore++;
        comScorePara.innerText = compScore;
        msg.innerText = `You lost!😭 ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}