import './Housing.scss'

import { useParams } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'

const Housing = () => {
    const {id} = useParams() // :id dans le router main.jsx ligne 19 ;)

    console.log(id)

    // // logement /card sur lequel on a cliqué
    // const housingClicked = 
    // // rechercher le logement qui a l'id === id
    // const housingDisplayed = data.find (logement => logement.id === housingClicked )

    // useEffect...fetch...state...etc...

    return (
        <MainLayout>
            <div className='housing_ container'>
                <div className='slideshow'>
                    <Slideshow/>
                </div>
               
                
                <div className='header_housind'>HEADER DU LOGEMENT</div>
                <div className='collapse_housing'>COLLAPSE DU LOGEMENT</div>
            </div>
        </MainLayout>
    )
}

export default Housing