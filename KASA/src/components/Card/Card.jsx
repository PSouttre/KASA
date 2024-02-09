/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({logement}) => {

const handleClickLocation = () => {
    // aller sur l'url de la page housing
}

    // On projette le state sur l'affichage (render)
    return (
        
            <div className='location__card'onClick={handleClickLocation}>
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