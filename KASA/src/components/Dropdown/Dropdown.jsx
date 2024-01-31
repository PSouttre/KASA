/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({title, content}) => {

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

export default Dropdown