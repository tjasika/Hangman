import './App.css'
import words from './Data/words.json';
import { Letter } from './Components/Letter';
import { useState, useEffect } from 'react';

function App() {

  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
  ];

  //const images = [array of images]

  const[currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessesRemaining, setGuessesRemaining] = useState(5);

  
  return (
    <>
      <div className='main-container'>

        <div className='left-container'>
        </div>

        <div className='right-container'>
          <div className='header-div'>
            <span>Guesses remaining: </span>
            <h1>HANGMAN</h1>
          </div>
          
          <div className='word-container'>
            
          </div>

          <div className='btns-container'>
            {alphabet.map((letter, index) => (
              <Letter key={index} value={letter}></Letter>
            ))}
          </div>
        </div>

        

      </div>
      
      
    </>
  )
}

export default App
