import './Housing.scss'

import { useData } from '../../provider/DataProvider'

import { useParams } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Housing = () => {
    const {houseId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()

    const housingData = data.filter((house) => house.id === houseId)[0]
    
    const ratingStar = [1, 2, 3, 4, 5]
    const ratingHousing = housingData.rating
    const starPink = <FontAwesomeIcon icon={faStar} />
    const starGrey = <FontAwesomeIcon icon={faStar} />
    

    return (
        <MainLayout>
            <div className='housing__container'>

                <div className='slideshow'>
                    <Slideshow pictures={housingData.pictures} />
                </div>
               
                
                <div className='header__housing'>
                    <article className='infos__housing__header__housing'>
                        <h1 className='title__header__housing'>
                            {housingData.title}
                        </h1>

                        <h2 className='location__header__housing'>
                            {housingData.location}
                        </h2>

                        <div className='tags__header__housing'>
                            {housingData.tags.map ((tag, i) => (
                                <p key={i} className='tag__tags__header__housing'>{tag}</p>
                            ))}
                        </div>

                    </article>

                    <article className='infos__host__header__housing'>

                        <div className='host__header__housing'>
                            <p className='hostName__header__housing'>
                                {housingData.host.name}
                            </p>
                            <img src={housingData.host.picture} alt={`${housingData.host.name} propriétaire de ${housingData.title}`} className='hostImg__header__housing'/>
                        </div>

                        <div className='rating__header__housing'>
                            {ratingStar.map((ratingStarElement) => ratingHousing >= ratingStarElement ?
                                <span key={ratingStarElement.toString()} className='faStarPink'>{starPink}</span> 
                                : <span key={ratingStarElement.toString()} className='faStarGrey'>{starGrey}</span>
                            
                            )}
                         </div>
                    </article>

                </div>

                <div className='collapse__housing'>
                    <div className='description__collapse__housing'>
                        <Collapse className='collapse__description__collapse__housing'title={"Description"} content={housingData.description}/>
                    </div>

                    <div className='equipments__collapse__housing'> 
                        <Collapse className='collapse__equimpents__collapse__housing'     title={"Equipements"} content=    {housingData.equipments.map((equipment, i) => (<ul key = {i}>
                            <li>{equipment}</li>
                        </ul>))}/>
                    </div>
                </div>
            </div> 
        </MainLayout>
    )
}

export default Housing