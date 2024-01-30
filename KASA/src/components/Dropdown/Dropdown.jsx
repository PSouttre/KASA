/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Dropdown.scss'

const Dropdown = ({title, content}) => {

    const [isDisplay, setIsDisplay] = useState(false)

    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }

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