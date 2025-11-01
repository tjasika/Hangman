import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import './StartPage.css'

function EndPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const title = location.state?.title || 'GAME OVER';
    return (
        <>
            <div className="start-container">
                <h1>{title}</h1>
                <button className='start-btn' onClick={()=>navigate('/game')}>Play Again</button>
            </div>
        </>
        
    )
}

export default EndPage