import './Card.scss'
import img from '../../assets/images/image_source_1.png'
import { useState } from 'react'

// import { useState } from 'react'

const Card = ({title, image, content}) => {

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
                    <img   src={img} alt="" />
                    {image}
                </div>
                <div className='title__card'>
                    {title}
                </div>
                <div className={`content ${displayLocation ? '' : 'hidden'}`}>{content}</div>

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

