import './Letter.css'

export const Letter = ({value, onClick}) => {
    return (
        <button className='letter-btn' onClick={()=>onClick(value)}>
            {value}
        </button>
    )
}