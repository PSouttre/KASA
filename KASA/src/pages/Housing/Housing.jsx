import './Housing.scss'

import { useData } from '../../provider/DataProvider'

import { useParams } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'

const Housing = () => {
    const {houseId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()

    const housingData = data.filter((house) => house.id === houseId)[0]

    console.log(housingData)

    // fournir les photos à <Slideshow pictures={housingData.pictures} />

    // afficher les details dans la page

    return (
        <MainLayout>
            <div className='housing_ container'>
                <div className='slideshow'>
                    <Slideshow pictures={housingData.pictures} />
                </div>
               
                
                <div className='header_housind'>HEADER DU LOGEMENT</div>
                <div className='collapse_housing'>COLLAPSE DU LOGEMENT</div>
                {housingData.title}
            </div>
        </MainLayout>
    )
}

export default Housing