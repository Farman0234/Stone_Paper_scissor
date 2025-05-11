let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorPara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-scor");

const genCompChoice = () => {
  //rock,paper,sissors

  let option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const showWiner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you Win");
    msg.innerText = `You are Win!Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorPara.innerText = userScore;
  } else {
    console.log("You lose");
    msg.innerText = `You are Los! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScorepara.innerText = compScore;
  }
};

const drawGame = () => {
  console.log("Game has Been Draw");
  msg.innerText = "Game was Draw. Play try again.";
  msg.style.backgroundColor = " #0e2742";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("computerChoice=", compChoice);
  if (userChoice === compChoice) {
    drawGame();
    compScor.innerHTML = drawGame++;
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("user Choice=", userChoice);
    playGame(userChoice);
  });
});
