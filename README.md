# Hangman 🪢

A classic **Hangman** game in React.js - with my own illustrations! 
You can check it out yourself - it's deployed!

### Components and pages
I separated the project into three pages: 
- The landing page (*StartPage.jsx*)
- The main page (*GamePage.jsx*)
- The end page (*EndPage.jsx*)
I did not need many components, since I handled most of everything inside GamePage.jsx. But I did create the following:
- *Letter-jsx*: for the letter buttons
- *ImageContainer.jsx*: for the main hangman images display
#### Data
I stored all the words inside a *words.json* file, which is just an array of strings.


### Game Logic
The main logic is in the **GamePage.jsx** page. There are 7 state variables:
- **currentWord**: randomly selected word to be guessed
- **guessedLetters**: all the letters the user had clicked
- **incorretLetters**: all the incorrect letters the user had clicked
- **correctLetters**: all the correct letters the user had clicked
- **gameOver**: boolean to check for game end
- **guessesRemaining**: how many guesses until game over
- **image**: which hangman image to display

#### Guessing 
This is the main logic of the game - if the player clicks on a letter that is inside the hidden word, they're one step closer to winning. If the letter is not in the word, the guesses remaining decrement and the player is one step closer to being "hanged".  
So firstly, the **selectRandomWord(array)** function selects a word from our .json file and sets it as the *currentWord*.  
When the player clicks on a letter, the **handleLetterClick(letter)** function adds that letter to the *guessedLetters* array and checks for correct guess - if incorrect, the *guessesRemaining* decrements by 1. Once the letter is inside the *guessedLetters* array, that button becomes disabled, to prevent errors.  
The displayed *hangman* illustration is handled in an *useEffect* hook - depending on the *guessesRemaining*, the image is selected from the *images* array. Since the guesses are decrementing, I just put the image urls in reversed order, so we're moving from the end of the array to the front.  
The second *useEffect* handles game end: if *guessesRemaining* are 0, the word is revealed to the player and 3 seconds later, they're redirected to the end page, with the message "GAME OVER". The second part checks for win and the user is redirected to the same page, but with a different message, "YOU WIN". (I vibe-coded that part of the logic)

### Styling
Obviously I had to choose a theme for this project, which was simply just 'computers' - so all the words are connected to computers, computer science.... I decided to draw the illustrations and keys in *pixel art* style (i used https://www.pixilart.com/). For the color palette I went with the first one I found on Pinterest that I liked. Although it could be better I'm honestly happy with how it turned out.  
I used plain CSS this time. For the responsiveness I just used Claude.ai (I was too lazy).
