import './Banner.scss'
import img from '../../assets/images/image_source_1.png'

const Banner = () => {
    return (
    <div className='img__home'>
        <img src={img} alt="Paysage de falaise et océan" />
        <p>Chez vous, partout et ailleurs</p>
    </div>
    )
}

export default Banner
