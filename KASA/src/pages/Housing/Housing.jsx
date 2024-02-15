import './Housing.scss'

import { useData } from '../../provider/DataProvider'

import { useParams } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'

const Housing = () => {
    const {houseId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()

    const housingData = data.filter((house) => house.id === houseId)[0]

    return (
        <MainLayout>
            <div className='housing__container'>
                <div className='slideshow'>
                    <Slideshow pictures={housingData.pictures} />
                </div>
               
                
                <div className='header_housind'>
                    {housingData.title}
                    {housingData.location}
                    {housingData.host.name}
                    {housingData.tags}
                    {housingData.rating}

                    <img src={housingData.host.picture} alt="" />
                </div>

                <div className='collapse_housing'>
                    <div className='description__collapse__housing'>
                        <Collapse title={"Description"} content={housingData.description}/>
                    </div>

                    <div className='equipments__collapse__housing'>
                        <Collapse title={"Equipements"} content=    {housingData.equipments.map((equipment, i) => (<ul key = {i}>
                            <li>{equipment}</li>
                        </ul>))}/>
                    </div>
                </div>

                {housingData.title}
            </div>
        </MainLayout>
    )
}

export default Housing