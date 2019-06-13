var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        alert("You win!");
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    }          
     else {
        guessesLeft--;
        }
    
    if(userGuess !== computerChoice) {
        guessesSoFar.push(userGuess);
    }
    if(guessesLeft === 0) {
        losses++
        guessesLeft = 10;
        guessesSoFar = [];
        alert("You lose!");
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    }
    
    //this fixed "guessesSoFar" starting with previous win letter
    if(guessesLeft === 10) {
        guessesSoFar = [];
    }
    

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses_so_far").innerHTML = "Guesses So Far: " + guessesSoFar;
}