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
                    <article className='header__housing__infos'>
                        <h1 className='header__housing__title'>
                            {housingData.title}
                        </h1>

                        <h2 className='header__housing__location'>
                            {housingData.location}
                        </h2>

                        <div className='header__housing__tags'>
                            {housingData.tags.map ((tag, i) => (
                                <p key={i} className='header__housing__tags__tag'>{tag}</p>
                            ))}
                        </div>

                    </article>

                    <article className='header__housing__host__infos'>

                        <div className='header__housing__host'>
                            <p className='header__housing__host__name'>
                                {housingData.host.name}
                            </p>

                            <img src={housingData.host.picture} alt={`${housingData.host.name} propriétaire de ${housingData.title}`} className='header__housing__host__img'/>
                        </div>

                        <div className='header__housing__rating'>
                            {ratingStar.map((ratingStarElement) => ratingHousing >= ratingStarElement ?
                                <span key={ratingStarElement.toString()} className='faStarPink'>{starPink}</span> 
                                : <span key={ratingStarElement.toString()} className='faStarGrey'>{starGrey}</span>
                            
                            )}
                         </div>
                    </article>

                </div>

                <div className='collapse__housing'>
                    <div className='collapse__housing__description'>
                        <Collapse title={"Description"} content={housingData.description}/>
                    </div>

                    <div className='collapse__housing__equipments'> 
                        <Collapse  title={"Equipements"} content=    {housingData.equipments.map((equipment, i) => (<ul key = {i}>
                            <li>{equipment}</li>
                        </ul>))}/>
                    </div>
                </div>
            </div> 
        </MainLayout>
    )
}

export default Housing