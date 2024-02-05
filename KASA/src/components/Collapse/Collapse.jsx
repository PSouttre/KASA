/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Collapse.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const ChevronDown = <FontAwesomeIcon icon={ChevronDown}/>
// const ChevronUp = <FontAwesomeIcon icon={ChevronUp}/>

const Collapse = ({title, content}) => {

    // On définit un state
    const [isDisplay, setIsDisplay] = useState(false)

    // On définit le comportement
    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }
    // On projette le state sur l'affichage
    return (
        <div className="container__collapse">
            <div className='each__collapse'>
                <div
                    className="header__collapse"
                    onClick={handleClick}
                >
                    <h2 className="title__header__collapse">{title}</h2>
                    {/* {!isDisplay ? <i className='icon__header__collapse'>{ChevronDown}</i> : <i className='icon__header__collapse'>{ChevronUp}</i>} */}
                </div>
                <div>    
                    <div className={`content ${isDisplay ? '' : 'hidden'}`}>{content}</div>
                </div>
            </div>
        </div>
    )
}

export default Collapse