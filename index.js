var inquirer = require("inquirer");

var Word = require("./word.js");
var guesses = 10;
var random = 0;
var word = "";
var usedLetters = {};

var listOfWords = [
  "panda",
  "cat",
  "moose",
  "buffalo",
  "caterpillar",
  "albatross",
  "duck",
  "mouse",
  "salamander",
  "rat",
  "horse",
  "koala",
  "bear",
  "hippopotamus",
  "camel",
  "giraffe",
  "eagle",
  "crocodile",
  "dog",
  "bird",
  "penguin",
  "pony",
  "bat",
  "otter",
  "dolphin",
  "hamster",
  "chameleon",
  "swordfish",
  "groundhog",
  "cricket",
  "clownfish",
  "leopard",
  "rabbit",
  "shark",
  "kitten",
  "reindeer",
  "wolf",
  "dragon",
  "whale",
  "hyena",
  "unicorn",
  "tuna",
  "shrimp",
  "skunk",
  "bulldog",
  "ladybug",
  "beaver",
  "puppy",
  "weasel",
  "owl",
  "lamb",
  "tiger",
  "pelican",
  "ape",
  "sheep",
  "cow",
  "spider",
  "turtle",
  "alligator",
  "seahorse",
  "turtle",
  "llama",
  "lion",
  "armadillo",
  "gopher",
  "three-toed",
  "elk",
  "fox",
  "guinea",
  "pig",
  "donkey",
  "frog",
  "zebra",
  "worm",
  "panther",
  "chinchilla",
  "chimpanzee",
  "calf",
  "seagull",
  "chicken",
  "human",
  "toucan",
  "deer",
  "lobster",
  "walrus",
  "komodo",
  "dragon",
  "jellyfish",
  "crab",
  "duckling",
  "wasp",
  "squirrel",
  "catfish"
];
var validInput = value => {
  value = value.toLowerCase();
  if (value.length === 1 && /[a-z]/i.test(value)) {
    if (usedLetters[value] === undefined || usedLetters.length === 0) {
      return true;
    } else {
      return "You have already used this letter.";
    }
  }
  return "Please, enter only one symbol and use letters only!";
};
function choseWord() {
  random = Math.floor(Math.random() * 93) + 1;
  word = new Word(listOfWords[random]);
  usedLetters = {};
  guesses = 10;
}
choseWord();

function startGame() {
  //console.log(listOfWords[random]);

  if (guesses > 0) {
    console.log(word.showWord());
    inquirer
      .prompt({
        name: "letter",
        message: "Guess a letter!",
        validate: validInput
      })
      .then(answers => {
        usedLetters[
          answers.letter.toLowerCase()
        ] = answers.letter.toLowerCase();
        var result = word.findLetter(answers.letter.toLowerCase());
        if (!result) {
          guesses--;
          console.log("INCORRECT!");
          console.log(guesses + " guesses remaining!");
        } else {
          console.log("CORRECT!");
        }
        if (word.showWord().indexOf("_") === -1) {
          console.log(word.showWord());
          console.log("Hooray! You won! Let's guess next word \n\n");
          choseWord();
        }
        startGame();
      });
  } else {
    console.log("GAME OVER! You loose!");
  }
}

startGame();
