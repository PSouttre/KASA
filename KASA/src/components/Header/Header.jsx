import './Header.scss'
import { NavLink } from "react-router-dom";

import img from '../../assets/icons/logo_kasa.png'

const Header = () => {
    return (
        <header id='header'>
            <div>
                <img src={img} alt="logo kasa" />
            </div>
            <nav className='navbar'>
                <NavLink to="/" activeClassName="selected">
                    Accueil
                </NavLink>
                <NavLink to="/a-propos" activeClassName="selected">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header