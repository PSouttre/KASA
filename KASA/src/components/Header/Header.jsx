import './Header.scss'
import { Link } from "react-router-dom";

import img from '../../assets/icons/logo_kasa.png'

const Header = () => {
    return (
        <header id='header'>
            <div>
                <img src={img} alt="logo kasa" />
            </div>
            <nav className='navbar'>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header