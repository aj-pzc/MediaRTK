import React, {useState} from "react";
import { Link } from 'react-router-dom';
import menuIcon from '../Media/menu.svg';

const Header = ({appName}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);






    return (
        <header className="header">

            <div className="header__menu">
                <button className="header__menu-button" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Menu"/>
                </button>
            </div>

            <div className="header__appName">
                <Link to="/">
                    <h1>{appName}</h1>
                </Link>
            </div>

            <nav className={`header__nav${menuOpen ? '-show' : ''}`}>
                <button className="header__nav-close" onClick={closeMenu}>
                    ✕ 
                </button>

                <div className="header__nav-links">                    
                    <Link to="/" onClick={closeMenu}>
                        <p>Buscador</p>
                    </Link>
                    <Link to="/playlist" onClick={closeMenu}>
                        <p>My Playlist</p>
                     </Link>
                </div>
                
            </nav>
        </header>           
    );
}

export default Header;
