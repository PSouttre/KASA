import './Footer.scss'
import img from '../../assets/icons/logo_kasa_footer.png'


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer__logo'>
                <img src={img} alt="logo kasa" />
            </div>
            <div className='footer__copyright'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer