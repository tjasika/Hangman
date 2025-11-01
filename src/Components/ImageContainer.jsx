import './ImageContainer.css'

export const ImageContainer = ({imgUrl}) => {
    return (
        <div className='left-container' style={{backgroundImage: imgUrl}}>
        </div>
    )
}