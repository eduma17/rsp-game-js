function computerPlay() {
    let choice = ['rock', 'Scissors', 'paper'];
    let move = choice[Math.floor(Math.random() * choice.length)];
    return move;

}

function gameRound (compPlay, gamerPlay, compScore, gamerScore) {
    if (gamerPlay.toLowerCase() === compPlay) {
        let resultGame = [compScore, gamerScore, "Even!"];
        return resultGame;
        }
    else if (gamerPlay.toLowerCase() === "rock") {
        if (compPlay === "Scissors") {
            gamerScore ++;
            let resultGame = [compScore, gamerScore ,"You win! Rock beats Scissors."];
            return resultGame;
            }
               
        else {
            compScore ++;
            let resultGame = [compScore, gamerScore, "You loose! Scissors beats Paper."];
            return resultGame;
            }   
        }
    else if (gamerPlay.toLowerCase() === "Scissors") {
        if (compPlay === "paper") {
            gamerScore ++;
            let resultGame = [compScore, gamerScore, "You win! Scissors beats Paper."];
            return resultGame;
            }
        else {
            compScore ++;
            let resultGame = [compScore, gamerScore, "You loose! Rock beats Scissors."];
            return resultGame;
            }
        }
    else if (gamerPlay.toLowerCase() === "paper") {
        if (compPlay === "rock") {
            gamerScore ++;
            let resultGame = [compScore, gamerScore, "You win! Rock beats Paper."];
            return resultGame;
        }
        else {
            compScore ++;
            let resultGame = [compScore, gamerScore, "You loose! Scissors beats Paper."];
            return resultGame;
            }
        }    
}

function game() {
    const gp = "Rock";
    let cs ;
    let gs ;
    for (let i=0;i<5;i++){
        let cp = computerPlay();
        let cs = 0;
        let gs = 0;
        let resultRound = gameRound(cp, gp, cs, gs);
        console.log(resultRound);
        cs = cs + resultRound[0];
        gs = gs + resultRound[1];
        
    }
    console.log("Computer: " + cs + " - Player: " + gs);    
    

}


// let cp = computerPlay();

// console.log("Comp Play:" + cp);
game();
