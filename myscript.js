function computerPlay() {
    let choice = ['rock', 'Scissors', 'paper'];
    let move = choice[Math.floor(Math.random() * choice.length)];
    return move;

}

function gameRound (compPlay, gamerPlay, compScore, gamerScore) {

    if (gamerPlay.toLowerCase() === compPlay) {
        return [compScore, gamerScore, "Even!"];
        }
    else if (gamerPlay.toLowerCase() === "rock") {
        if (compPlay === "Scissors") {
            gamerScore ++;
            return [compScore, gamerScore ,"You win! Rock beats Scissors."];
            }
               
        else {
            compScore ++;
            return [compScore, gamerScore, "You loose! Scissors beats Paper."];
            }   
        }
    else if (gamerPlay.toLowerCase() === "Scissors") {
        if (compPlay === "paper") {
            gamerScore ++;
            return [compScore, gamerScore, "You win! Scissors beats Paper."];
            }
        else {
            compScore ++;
            return [compScore, gamerScore, "You loose! Rock beats Scissors."];
            }
        }
    else if (gamerPlay.toLowerCase() === "paper") {
        if (compPlay === "rock") {
            gamerScore ++;
            return [compScore, gamerScore, "You win! Rock beats Paper."];
        }
        else {
            compScore ++;
            return [compScore, gamerScore, "You loose! Scissors beats Paper."];
            }
        }    
}

function game() {
    const gp = "Rock";
    let cs = 0;
    let gs = 0;
    for (let i=0;i<5;i++){
        let cp = computerPlay();
        // cs = cs + gameRound[0];
        // gs = gs + gameRound[1];
        console.log(gameRound(cp, gp, cs, gs));
    console.log("Computer: " + cs + " - Player: " + gs);    
    }

}


// let cp = computerPlay();

// console.log("Comp Play:" + cp);
game();
