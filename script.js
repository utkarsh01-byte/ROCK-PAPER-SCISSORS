let userScore = 0;
let computerScore = 0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const cScore=document.querySelector("#computer-score");
const uScore=document.querySelector("#user-score");
const genCompchoice=()=>{
    const options=["Rock", "Paper", "Scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];

}
const showWinner=(userWin, computerChoice, userchoice)=>{
    if (userWin){
        console.log("you win");
        msg.innerText=`You Win!   Your ${userchoice} beats ${computerChoice}`;
        userScore++;
        uScore.innerText=userScore;
        msg.style.backgroundColor="green";

    }
    else {
        console.log("you lose");
        msg.innerText=`You Lose!   ${computerChoice} beats Your ${userchoice}`;
        computerScore++;
        cScore.innerText=computerScore;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{
    console.log("userchoice =", userchoice);
    const computerChoice=genCompchoice();
    console.log("compChoice =", computerChoice);
    if (userchoice === computerChoice){
        console.log("It's a tie");
        msg.innerText=`Draw ! Both chose ${userchoice}`;
        msg.style.backgroundColor="#081b31";
    }
    else {
        let userWin=true;
        if (userchoice === "Rock" ){
            computerChoice === "Paper"? userWin=false : userWin=true;
        }
        else if (userchoice === "Paper" ){
            computerChoice === "Scissors"? userWin=false : userWin=true;
        }
        else if (userchoice === "Scissors" ){
            computerChoice === "Rock"? userWin=false : userWin=true ;
        }
        showWinner(userWin, computerChoice, userchoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        playGame(choice.id);
    });
});