import './Card.scss'
import { useState } from 'react'

const Card = ({title, content}) => {

    // On définit un state
    const [isDisplay, setIsDisplay] = useState(false)

    // On définit le comportement
    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }
    // On projet le state sur l'affichage
    return (
        <div className="container">
            <div
                className="title"
                onClick={handleClick}
            >
                {title}
            </div>
            <div className={`content ${isDisplay ? '' : 'hidden'}`}>{content}</div>
        </div>
    )
}

export default Card
