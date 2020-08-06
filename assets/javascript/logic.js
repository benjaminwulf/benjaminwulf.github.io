var wordList = [
    "purple",
    "maroon",
    "periwinkle",
    "violet",
    "plum",
    "magenta"
];
var chosenWord = "";
var chosenWordArr = [];
var numBlanks = 0;
var blanksWordArr = [];
var wrongGuesses = [];
var letterGuessed = "";
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;
var blanksAndSuccesses = [];

function initGame() {
    numGuesses = 10;
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    chosenWordArr = chosenWord.split(""); 
    numBlanks = chosenWordArr.length;
    blanksAndSuccesses = [];
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.querySelector("#guesses-left").innerHTML = numGuesses;
    document.querySelector("#word-blanks").innerHTML = blanksAndSuccesses.join("");
    document.querySelector("#wrong-guesses").innerHTML = wrongGuesses.join("");
}

function checkLetterFunc(letter) {
    letterInWord = false;
    
    for (var i = 0; i < numBlanks.length; i++) {
        if (chosenWordArr[i] == letter) {
            letterInWord = true;
        }
    } 
        if (letterInWord) {
            for (var j = 0; j < numBlanks.length; j++) {
                if (chosenWordArr[j] == letter) {
                    blanksAndSuccesses[j] = letter;
                }
            }
        }
        else {
            wrongGuesses.push(letter);
            numGuesses--;
        }
}