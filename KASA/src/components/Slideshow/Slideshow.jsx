/* eslint-disable react/prop-types */
import './Slideshow.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Slideshow = ({pictures}) => {
    // Initialisation du state 
    const [slide, setSlide] = useState(0);
    // Longueur du tableau de photos
    const lengthArray = pictures.length; 

    //Image précédente
    const nextSlide = () => {
        setSlide(slide === lengthArray-1 ? 0 : slide + 1)
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? lengthArray -1 : slide -1)
    }

    // Slide actuelle
    const currentSlide = pictures[slide];

    return (
        <div>
            <div className='carrousel'>

            {lengthArray>1 && <>
                <i className ='fa-solid fa-chevron-left'onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} /></i>
                </>}

                <div className='slide__carrousel'> 
                    <img src={currentSlide} alt="" />                   
                </div>

            {lengthArray>1 && <>
                <span className='counter__carrousel'>{slide + 1}/ {lengthArray}</span>
                </>}

                {lengthArray>1 && <>
                <i className ='fa-solid fa-chevron-right'onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} /></i>            
                </>}
                
            </div>
        </div>

    )
}

export default Slideshow