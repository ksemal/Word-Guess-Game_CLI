# Word-Guess-Game_CLI

Word Guess command-line game built using constructor functions.
Users can guess various letters of a given word using command line input.
Each time word is chosen randomly.
It's made up of three elements: `Letter.js`, `Word.js` and `Index.js`.

- `Word.js` require `Letter.js`. `Word.js` contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
- `Index.js` require `Word.js`. Contains the logic for the course of the game, randomly selects a word and uses the `Word` constructor to store it, prompts the user for each guess and keeps track of the user's remaining guesses. Also it uses validation of the user input.

- `Letter.js` contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.

Tech:

- [node.js]
  Used packages:
- npm Inquirer.js

Installation:

- requires Node.js to run.
- install the dependencies by running 'npm install'

I think the biggest technical challenge was create a function that validate the user input and return all the necessary values to index.js in order to be able to keep track of the game score.
