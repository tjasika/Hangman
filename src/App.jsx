import './App.css'
import { Letter } from './Components/Letter';

function App() {

  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
  ];

  
  return (
    <>
      <div className='main-container'>

        <div className='left-container'>

        </div>

        <div className='right-container'>
          <h1>HANGMAN</h1>

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
