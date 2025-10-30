import { useNavigate } from 'react-router-dom'
import './StartPage.css'

function EndPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="start-container">
                <h1>GAME OVER</h1>
                <button className='start-btn' onClick={()=>navigate('/game')}>Play Again</button>
            </div>
        </>
        
    )
}

export default EndPage