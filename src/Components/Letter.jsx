import './Letter.css'

export const Letter = ({value}) => {
    return (
        <button className='letter-btn'>
            {value}
        </button>
    )
}