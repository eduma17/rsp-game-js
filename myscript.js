function computerPlay() {
    let choice = ['rock', 'siccers', 'paper'];
    let move = choice[Math.floor(Math.random() * choice.length)];
    return move;

}

function gameRound (compPlay, gamerPlay) {
    if (gamerPlay.toLowerCase() === compPlay) {
        return "Even!";
        }
    else if (gamerPlay.toLowerCase() === "rock") {
        if (compPlay === "siccers") {
            return "You win!";
            }
               
        else {
            return "You loose!";
            }   
        }
    else if (gamerPlay.toLowerCase() === "siccers") {
        if (compPlay === "paper") {
            return "You win!";
            }
        else {
            return "You loose!";
            }
        }
    else if (gamerPlay.toLowerCase() === "paper") {
        if (compPlay === "rock") {
            return "You win!";
        }
        else {
            return "You loose!";
            }
        }    
}
const cp = computerPlay();
const gp = "Rock";
console.log("Comp Play:" + cp);
console.log(gameRound(cp, gp));
