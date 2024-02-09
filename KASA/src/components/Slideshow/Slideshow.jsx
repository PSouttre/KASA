import './Slideshow.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Slideshow = () => {

        // state
        const [data, setData] = useState(null)

        // comportement
        useEffect(() => {
            fetch('./src/datas/logements.json')
                .then(data => data.json())
                .then(result => setData(result))
        }, [])


   
    // Initialisation du state 
    const [slide, setSlide] = useState(0);
    // Longueur du tableau de photos
    const pictures = data.pictures;
    const lengthArray = pictures.length; 

    return (
        <div>
            <div className='carrousel'>
                <p className='chevronLeft'onClick={() => {
            setSlide(slide === 0 ? lengthArray - 1 : slide - 1);
        }
                }>
                    <i className ='fa-solid fa-chevron-left'></i>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </p>

                <p className='chevronRight'onClick={() => {
            setSlide (slide === lengthArray -1 ? 0 : slide + 1);}}>
                    <FontAwesomeIcon icon={faChevronRight} />            
                </p>

                data.map((logement) = {
                   (

                        <div>
                            <img src="{logement.pictures}" alt="" />
                            <span>{slide + 1}/ {lengthArray}</span>
                        </div>


            )
                })


            </div>
        </div>

    )
}

export default Slideshow