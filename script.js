let rockOption = document.querySelector("#rockOption");
let paperOption = document.querySelector("#paperOption");
let scissorOption = document.querySelector("#scissorOption");
let playerBoxH1 = document.getElementById("playerBoxH1");
let botBoxH1 = document.getElementById("botBoxH1");
let startGameButton = document.getElementById("startGameButton")

let roundCircle1 = document.getElementById("roundCircle1")

let roundCircle2 = document.getElementById("roundCircle2")

let roundCircle3 = document.getElementById("roundCircle3")

let roundCircle4 = document.getElementById("roundCircle4")

let roundCircle5 = document.getElementById("roundCircle5")

let playerNumber = 1;
let botNumber; 
let result;
let round = 1;
let playerWonGames = 0;
let botWonGames = 0;

let playerBox = document.querySelector("#playerBox");
let botBox = document.querySelector("#botBox");
let commentary = document.querySelector("#commentary");

let playerWon = ()=>{
    result = "you won";
    commentary.style.color = "green";
    document.getElementById(`roundCircle${round}`).style.backgroundColor = "green"
    playerWonGames++
    
}
let botWon = ( ) =>{
    result = "you lost"
    commentary.style.color = "red"
    document.getElementById(`roundCircle${round}`).style.backgroundColor = "red"
    botWonGames++
}
let draw = () =>{
    result = "draw"
    commentary.style.color = "yellow"
    document.getElementById(`roundCircle${round}`).style.backgroundColor = "yellow"
}

let theGame = (playerNumber, botNumber ) =>{
    if (playerNumber == 1 ){
        playerBoxH1.textContent = "👊"
    }else if(playerNumber == 2){
        playerBoxH1.textContent = "✋"
    }if (playerNumber == 3){
        playerBoxH1.textContent = "✌"
    }

    if (botNumber == 1 ){
        botBoxH1.textContent = "👊"
    }else if(botNumber == 2){
        botBoxH1.textContent = "✋"
    }if (botNumber == 3){
        botBoxH1.textContent = "✌"
    }

    if(playerNumber == botNumber){
        draw();
        commentary.innerHTML = "draw"
    }else if(playerNumber == 1 && botNumber == 3){
        playerWon();
        commentary.innerHTML = "you won";
    }else if(playerNumber == 2 && botNumber == 1){
        playerWon();
        commentary.innerHTML = "you won";
    }else if(playerNumber == 3 && botNumber == 2){
        playerWon();
        commentary.innerHTML = "you won";
    }else{
        botWon();
        commentary.innerHTML = "you lost"
    }
    round++;
    console.log(`player: ${playerNumber} | bot: ${botNumber} | ${result}`)
    
    if(round == 6){
        endGame()
    }
    
}

let setPlayerOption = (number) =>
{
    playerNumber = number;
}



let startGame = () => {
    startGameButton.style.visibility = "hidden";
    botNumber = Math.ceil(Math.random() * 3);
    playerNumber = 1;
    let timeleft = 2;
    let countdownArray = ["scissor", "paper", "rock"]
    let downloadTimer = setInterval(function(){
        commentary.style.color = "rgb(196, 47, 255)";
        commentary.textContent = countdownArray[timeleft];
        if(timeleft <= -1){
            clearInterval(downloadTimer);
            theGame(playerNumber, botNumber);
        }
        timeleft -= 1;
    }, 1000);
    
}

function startRound(){
    round = 1;
    playerWonGames = 0;
    botWonGames = 0;
    startGame();
    let timeleft = 3;
    let roundTimer = setInterval(function(){
        startGame();
        if(timeleft <= 0){
            clearInterval(roundTimer);
        }
        timeleft -= 1;
        
        
    }, 6500);
    
    
}



function endGame (){
    roundCircle1.style.backgroundColor = "white"
    roundCircle2.style.backgroundColor = "white"
    roundCircle3.style.backgroundColor = "white"
    roundCircle4.style.backgroundColor = "white"
    roundCircle5.style.backgroundColor = "white"

    

    if(playerWonGames == botWonGames){
        commentary.innerText = "the game was draw. no body won."
        commentary.style.color = "yellow"
    }else if(playerWonGames > botWonGames){
        commentary.innerText = "yay, you won the game!"
        commentary.style.color = "green"
    }else{
        commentary.innerText = "you loser, the computer won!"
        commentary.style.color = "red"
    }

    startGameButton.style.visibility = "visible"
}
