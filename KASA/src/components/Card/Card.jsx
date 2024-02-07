/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({logement}) => {
    
    // On projette le state sur l'affichage (render)
    return (
        
            <div className='location__card'>
                <div className='image__cover'>
                    <img src={logement.cover} />
                </div>
                <div className='title__card'>
                    {logement.title}
                </div>
            </div>
        
    )
}

export default Card