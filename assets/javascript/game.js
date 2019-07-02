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
var guessString = "";

//placeholder variables for insertion into HTML
var userWinsText = document.getElementById("userWins");
var userLossesText = document.getElementById("userLosses");
var userGuess = document.getElementById("guessesLeft");
var userInput = document.getElementById("userGuesses");

//function to run on button clicks
document.onkeyup = function(guess) {
  var userEntry = guess.key.toUpperCase();
  var computerGuess = letters[Math.floor(Math.random() * letters.length)];
  var inputString = guessString + userEntry;
  userInput.textContent += userEntry + " ";

  if (userEntry === computerGuess) {
    userWinsText.textContent = wins++;
  } else {
    userGuess.textContent = guesses--;
  }
};
