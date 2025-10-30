import '../App.css'
import words from '../Data/words.json';
import { Letter } from '../Components/Letter';
import { useState, useEffect } from 'react';

function GamePage() {

  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
  ];

  //const images = [array of images]

  const[currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectLetters, setInorrectLetters] = useState([]);
    const [correctLetters, setCorrectLetters] = useState([]);

  const [guessesRemaining, setGuessesRemaining] = useState(5);

  //Selects a random word
  const getRandomWord = (array) => {
    const randomWord = array[Math.floor(Math.random() * array.length)];
    setCurrentWord(randomWord);
  };

  useEffect(() => {
    getRandomWord(words);
  }, []);

  const handleLetterClick = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    if(!currentWord.toUpperCase().includes(letter)) {
      setGuessesRemaining(guessesRemaining - 1);
      setInorrectLetters([...incorrectLetters, letter]);
    } else {
      setCorrectLetters([...correctLetters, letter]);
    }
  }

  
  return (
    <>
      <div className='main-container'>

        <div className='left-container'>
        </div>

        <div className='right-container'>
          <div className='header-div'>
            <span>Guesses remaining: <span className='guesses-span'>  {guessesRemaining}</span> </span>
            <h1>HANGMAN</h1>
          </div>
          
          <div className='word-container'>
              {currentWord.split('').map((letter, index) => (
                <div key={index} className='letter-box'>
                  {guessedLetters.includes(letter.toUpperCase()) ? letter : ''}
                </div>
              ))}
          </div>

          <div className='btns-container'>
            {alphabet.map((letter, index) => (
              <Letter key={index} value={letter} 
                      onClick={handleLetterClick} 
                      isCorrect={correctLetters.includes(letter)} 
                      isIncorrect={incorrectLetters.includes(letter)}
                      isDisabled={guessedLetters.includes(letter)}></Letter>
            ))}
          </div>
        </div>

        

      </div>
      
      
    </>
  )
}

export default GamePage
