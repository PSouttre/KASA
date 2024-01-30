import { Link } from "react-router-dom";

import img from '../../assets/icons/logo_kasa.png'

const Header = () => {
    return (
        <header>
            <div>
                <img src={img} alt="logo kasa" />
            </div>
            <nav>
                <Link to="/a-propos">A propos</Link>
                <Link to="/">Page daccueil</Link>
            </nav>
        </header>
    )
}

export default Header