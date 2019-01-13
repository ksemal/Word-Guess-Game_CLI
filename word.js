var Letter = require("./letter.js");

var Word = function(currentWord) {
  var array = [];
  var dispalyWord = "";
  for (var i = 0; i < currentWord.length; i++) {
    var letter = new Letter(currentWord[i]);
    array.push(letter);
  }
  this.array = array;
  this.showWord = function() {
    dispalyWord = "";
    for (var i = 0; i < array.length; i++) {
      var dispalyLetter = array[i].toString();
      dispalyWord += dispalyLetter;
    }
    return dispalyWord;
  };
  this.findLetter = function(userLetter) {
    var checkStatus = false;
    var result = [];
    for (var i = 0; i < array.length; i++) {
      result.push(array[i].checkLetter(userLetter));
    }
    result.forEach(function(e) {
      if (e) {
        checkStatus = true;
      }
    });

    if (checkStatus) {
      return true;
    } else {
      return false;
    }
  };
};

module.exports = Word;
