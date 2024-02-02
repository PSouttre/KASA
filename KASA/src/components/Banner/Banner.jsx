import './Banner.scss'
import img from '../../assets/images/image_source_1.png'

const Banner = () => {
    return (
    <div className='img__home'>
        <img src={img} alt="Paysage de falaise et océan" />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default Banner
