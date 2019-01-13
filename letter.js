var Letter = function(userInput) {
  this.hiddenLetter = userInput;
  this.guessed = false;
  this.toString = function() {
    if (this.guessed) {
      return this.hiddenLetter;
    } else {
      return "_";
    }
  };
  this.checkLetter = function(letter) {
    if (letter === this.hiddenLetter) {
      this.guessed = true;
      return true;
    } else {
      return false;
    }
  };
};

module.exports = Letter;
