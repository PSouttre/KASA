/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({logement}) => {
    
    // On projette le state sur l'affichage (render)
    return (
        <div className='container'>
            <div className='location__card'>
                <div className='imageCover'>
                    <img src={logement.cover} />
                </div>
                <div className='title__card'>
                    {logement.title}
                </div>
            </div>
        </div>
    )
}

export default Card