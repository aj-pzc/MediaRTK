import React, {useState} from "react";
import { Link } from 'react-router-dom';
import menuIcon from '../Media/menu.svg';
import { AppName, HeaderBar, MenuBox, MenuBtn, MenuClose, MenuNav, NavLinks} from "./styles";

const Header = ({appName}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <HeaderBar>
            <MenuBox>
                <MenuBtn onClick={toggleMenu}>  
                    <img src={menuIcon} alt="Menu"/>
                </MenuBtn>
            </MenuBox>

            <AppName>
                <Link to="/">
                    <h1>{appName}</h1>
                </Link>
            </AppName>

            <MenuNav $show={menuOpen}>
                <MenuClose onClick={closeMenu}>
                    ✕ 
                </MenuClose>

                <NavLinks>                    
                    <Link to="/" onClick={closeMenu}>
                        <p>Buscador</p>
                    </Link>
                    <Link to="/playlist" onClick={closeMenu}>
                        <p>My Playlist</p>
                    </Link>
                    <Link to="/Favorites" onClick={closeMenu}>
                        <p>My Favorites</p>
                    </Link>
                </NavLinks>                
            </MenuNav>
        </HeaderBar>           
    );
}

export default Header;
