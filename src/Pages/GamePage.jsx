import '../App.css'
import words from '../Data/words.json';
import { Letter } from '../Components/Letter';
import {ImageContainer} from '../Components/ImageContainer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GamePage() {

  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
  ];

  const navigate = useNavigate();
  const images = [
    'url(./img/hangman6.png)',
    'url(./img/hangman5.png)',
    'url(./img/hangman4.png)',
    'url(./img/hangman3.png)',
    'url(./img/hangman2.png)',
    'url(./img/hangman1.png)', 
  ]

  const[currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectLetters, setInorrectLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const [guessesRemaining, setGuessesRemaining] = useState(5);
  const [image, setImage] = useState(images[0])

  const startGame = () => {
    setGuessedLetters([]);
    setGuessesRemaining(5);
    setCorrectLetters([]);
    setInorrectLetters([]);
    getRandomWord(words);
    setGameOver(false);
  }

  useEffect(()=> {
    startGame();
  }, [])

  //Selects a random word
  const getRandomWord = (array) => {
    const randomWord = array[Math.floor(Math.random() * array.length)];
    setCurrentWord(randomWord);
  };


  const handleLetterClick = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
    if(!currentWord.toUpperCase().includes(letter)) {
      setGuessesRemaining(guessesRemaining - 1);
      setInorrectLetters([...incorrectLetters, letter]);
    } else {
      setCorrectLetters([...correctLetters, letter]);
    }
  }

  useEffect(() => {
  if (guessesRemaining >= 0) {
    setImage(images[guessesRemaining]);
  }
}, [guessesRemaining]);

  useEffect(() => {
    if (gameOver) return;
    // Check for loss
    if (guessesRemaining === 0) {
      setGuessedLetters(currentWord.toUpperCase().split(''));
      setGameOver(true);
      setTimeout(()=> {
        navigate('/gameover', { state: { title: 'GAME OVER!' } });
      }, 3000)
      
    }

    if (currentWord) {
      const allLettersGuessed = currentWord
        .toUpperCase()
        .split('')
        .every(letter => guessedLetters.includes(letter));
      
      if (allLettersGuessed && guessedLetters.length > 0) {
        navigate('/gameover', { state: { title: 'YOU WIN!' } });      
      }
    }
    
  }, [guessesRemaining, guessedLetters, currentWord]);

  
  return (
    <>
      <div className='main-container'>

        <ImageContainer imgUrl={image}/>

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
