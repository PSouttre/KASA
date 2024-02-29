import './Footer.scss'
import img from '../../assets/icons/logo_kasa_footer.png'


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer__logo'>
                <img src={img} alt="logo kasa" />
            </div>
            
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
            
        </footer>
    )
}

export default Footer