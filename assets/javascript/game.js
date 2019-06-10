var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [""];
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
        alert("You win!");
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
               
    } else {
        guessesLeft--;
    }
    if(guessesLeft === 0) {
        losses++
        guessesLeft = 9;
        guessesSoFar = [];
        alert("You suck!");
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    }
    if(userGuess !== computerChoice) {
        guessesSoFar.push(userGuess);
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses_so_far").innerHTML = "Guesses So Far: " + guessesSoFar;
}