const colors = ['#2E191B', '#0B6623', '#000080'] // Vermillion, Forest, Navy

const myColor = function(color){
    let guessNum = Math.random()*color.length-1;
    console.log(parseInt(Math.random()*color.length));
    return color[guessNum];
}

console.log(myColor(colors));