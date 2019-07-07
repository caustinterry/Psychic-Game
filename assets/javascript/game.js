//array set for the all the letters
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
//variable set for the scoreboard
var wins = 0;
var losses = 0;
var guesses = 9;
var guessString = [];

//placeholder variables for insertion into HTML
var userWinsText = document.getElementById("userWins");
var userLossesText = document.getElementById("userLosses");
var userGuess = document.getElementById("guessesLeft");
var userInput = document.getElementById("userGuesses");

function randNumber() {
  return letters[Math.floor(Math.random() * letters.length)];
}

var computerGuess = randNumber();
console.log(computerGuess);

//function to run on button clicks
document.onkeypress = function(guess) {
  var userEntry = guess.key.toUpperCase();
  guessString.push(userEntry);
  userInput.textContent = guessString;
  if (userEntry === computerGuess) {
    wins++;
    userWinsText.textContent = wins;
    guessString.length = 0;
    userInput.textContent = guessString;
    guesses = 9;
    userGuess.textContent = guesses;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
  } else {
    guesses--;
    userGuess.textContent = guesses;
  }
  if (guesses === 0) {
    losses++;
    userLossesText.textContent = losses;
    guessString.length = 0;
    userInput.textContent = guessString;
    guesses = 9;
    userGuess.textContent = guesses;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
  }
};
