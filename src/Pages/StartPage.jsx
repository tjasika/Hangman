import './StartPage.css'
import { useNavigate } from 'react-router-dom'

function StartPage() {
   const navigate = useNavigate();

    return (
        <>
        <div className="start-container">
            <h1>HANGMAN</h1>
            <button className='start-btn' onClick={()=>navigate('/game')}>PLAY</button>
        </div>
        </>
    )
}

export default StartPage
