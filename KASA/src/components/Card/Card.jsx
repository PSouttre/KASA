import './Card.scss'
import { useState } from 'react'
import housings from '../../datas/logements.json'
import Housing from '../Housing/Housing'


const Card = ({title, cover, content}) => {

    // On définit un state
    const [displayLocation, setDisplayLocation]= useState(false)

    // On définit le comportement
    const handleClick = () => {
        setDisplayLocation(!displayLocation)
    }
    
    // On projette le state sur l'affichage (render)
    return (
        <div className='container'>
            <div className='location__card'onClick={handleClick}>
                <div className='imageCover'>
                    <img   src={cover} alt="{title}" />
                </div>
                <div className='title__card'>
                    {title}
                </div>
                <div className={`content ${displayLocation ? '' : 'hidden'}`}>{Housing}</div>

            </div>
        </div>
    )
}

export default Card




// const Card = ({title, content}) => {

//     // On définit un state
//     const [isDisplay, setIsDisplay] = useState(false)

//     // On définit le comportement
//     const handleClick = () => {
//         setIsDisplay(!isDisplay)
//     }
//     // On projet le state sur l'affichage
//     return (
//         <div className="container">
//             <div
//                 className="title"
//                 onClick={handleClick}
//             >
//                 {title}
//             </div>
//             <div className={`content ${isDisplay ? '' : 'hidden'}`}>{content}</div>
//         </div>
//     )
// }

