function computerPlay() {
    let choice = ['rock', 'siccers', 'paper'];
    let move = choice[Math.floor(Math.random() * choice.length)];
    return move;

}

const cp = computerPlay();
console.log(cp);

