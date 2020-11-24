

//The Variables for the game.
var computerChoices = ["anakin", "chewbacca", "mace windu", "emperor palpatine", "han solo", "obi wan kenobi", "yoda", "Luke Skywalker", "Princess Leia",];
var numWins = 0;
var numLosses = 0;
var guessLeft;
var incorrectGuesses;
var userGuess;
var computerWord = '';
var wordDisplay = '';
var numWrong = 0;
var validInputs = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ -'.split('');

//setup first game.
gameReset();
// Function that checks user guess and prints the word to the debugger.
document.onkeyup = function (event) {
    userGuess = event.key;
    console.log(computerWord);
    if (validInputs.indexOf(userGuess) === -1) {
        alert('A-Z Only')
    }
    else if (computerWord.indexOf(userGuess) > -1) {
        for (var j = 0; j < computerWord.length; j++) {
            if (computerWord[j] === userGuess)
                wordDisplay[j] = computerWord[j].toUpperCase();
        }
        if (wordDisplay.indexOf('_') === -1) {
            numWins++;
            gameReset();
        }
    }
    else {
        guessLeft--;
        if (guessLeft > 0) {
            incorrectGuesses.push(userGuess.toUpperCase());
            numWrong++;
            hang();
        } else {
            gameOver();
        }
    }
    // Updates the scoreboard.
    document.querySelector('#numWins').innerHTML = "" + numWins;
    document.querySelector('#numLosses').innerHTML = "" + numLosses;
    document.querySelector('#guessLeft').innerHTML = "" + guessLeft;
    document.querySelector('#incorrectGuesses').innerHTML = incorrectGuesses.join(" ");
    document.querySelector('#wordDisplay').innerHTML = wordDisplay.join(" ");
};
//function to draw the Platform.
function draw() {
    var ctx = document.getElementById("hangman").getContext('2d');
    ctx.fillStyle = "grey";
    ctx.lineWidth = 3;
    ctx.fillRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.moveTo(50, 270);
    ctx.lineTo(50, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(65, 270);
    ctx.lineTo(65, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(49, 25);
    ctx.lineTo(175, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(49, 40);
    ctx.lineTo(175, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(173, 25);
    ctx.lineTo(173, 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(35, 270);
    ctx.lineTo(265, 270);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 40);
    ctx.lineTo(150, 80);
    ctx.stroke();
    ctx.clearRect(0, 0, ctx.width, ctx.height);
}
//function to draw the body.
function hang() {
    var ctx = document.getElementById("hangman").getContext('2d');
    if (numWrong === 1) {
        ctx.beginPath(); 
        ctx.arc(150, 100, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }
    if (numWrong === 2) {
        ctx.beginPath(); 
        ctx.moveTo(150, 120);
        ctx.lineTo(150, 190);
        ctx.stroke();
    }
    if (numWrong === 3) {
        ctx.beginPath(); 
        ctx.moveTo(150, 135);
        ctx.lineTo(180, 160);
        ctx.stroke();
    }
    if (numWrong === 4) {
        ctx.beginPath(); 
        ctx.moveTo(150, 135);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }
    if (numWrong === 5) {
        ctx.beginPath(); 
        ctx.moveTo(149, 188);
        ctx.lineTo(180, 230);
        ctx.stroke();
    }
    if (numWrong === 6) {
        ctx.beginPath(); 
        ctx.moveTo(151, 188);
        ctx.lineTo(120, 230);
        ctx.stroke();
    }
    if (numWrong === 11) {
        ctx.beginPath(); 
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 205);
        ctx.stroke();
        ctx.beginPath(); 
        ctx.moveTo(150, 150);
        ctx.lineTo(180, 175);
        ctx.stroke();
        ctx.beginPath(); 
        ctx.moveTo(150, 150);
        ctx.lineTo(120, 175);
        ctx.stroke();
        ctx.beginPath(); 
        ctx.moveTo(149, 203);
        ctx.lineTo(180, 245);
        ctx.stroke();
        ctx.beginPath(); 
        ctx.moveTo(151, 203);
        ctx.lineTo(120, 245);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.clearRect(0, 0, ctx.width, ctx.height);
    }

}
//Game functions
function setWordDashes() {
    for (var i = 0; i < computerWord.length; i++)
        wordDisplay.push('_');
}
//resets the scoreboard
function gameReset() {
    computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessLeft = 15;
    incorrectGuesses = [];
    userGuess = '';
    wordDisplay = [];
    setWordDashes();
    draw();
    hang();
    numWrong = 0;
}
function gameWon() {
   computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessLeft = 15;
    incorrectGuesses = [];
    userGuess = '';
    wordDisplay = [];
    setWordDashes();
    draw();
    hang();
    numWrong = 0;
}

function gameOver() {
    numLosses++;
    setTimeout(function () {
        alert("GAME OVER\nThe correct word my Young Padawan is:\n" + computerChoices.toUpperCase());
        // 
    }, 0);
    numWrong = 0;
    draw();
    gameReset();
}

function gameWon() {
   numWins++;
    setTimeout(function () {
       alert("YOU WON!!!!\nKnow Your StarWars You Do!:\n" + computerWord.toUpperCase());
   }, 0);
    numWrong(0);
    draw();
    gameReset();
}
