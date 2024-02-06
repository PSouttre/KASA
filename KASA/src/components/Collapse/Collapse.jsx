/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, content}) => {

    // On définit un state
    const [isDisplay, setIsDisplay] = useState(false)

    // On définit le comportement
    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }
    // On projette le state sur l'affichage
    return (
        <div className='each__collapse'>
            <div
                className="header__collapse"
                onClick={handleClick}
            >   
                <h2 className="title__header__collapse">{title}</h2>
                <FontAwesomeIcon icon={isDisplay ? faChevronUp : faChevronDown} />
            </div>
            <div>    
                <div className={`content ${isDisplay ? '' : 'hidden'}`}>{content}</div>
            </div>
        </div>
    )
}

export default Collapse