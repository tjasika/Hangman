import './Letter.css'

export const Letter = ({value, onClick, isCorrect, isIncorrect, isDisabled}) => {

    let bgImage = 'url(/img/btn_main.png)';
    let textColor = 'var(--highlight)';
    if(isCorrect) {
        bgImage = 'url(/img/btn_correct.png)';
        textColor = 'var(--medium-green)';
    } else if(isIncorrect) {
        bgImage = 'url(/img/btn_incorrect.png)';
        textColor = 'var(--main-bg)';
    }

    return (
        <button className='letter-btn' 
            
            onClick={()=>onClick(value)} 
            disabled={isDisabled}
            style={{backgroundImage: bgImage,  color: textColor}}>
            {value}
        </button>
    )
}