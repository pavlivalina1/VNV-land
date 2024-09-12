import React, { useState, useEffect } from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const headerHeight = document.querySelector('.header-links').offsetHeight;
            setHeaderHeight(headerHeight-1);
        };

        window.addEventListener('resize', handleResize);

        // Initial calculation of headerLogoHeight
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-links">
                <div className="header-link"><Link to="/">Home</Link></div>
                <div className="header-link"><Link to="/about-us">About us</Link></div>
                <div className="header-link"><Link to="/portfolio">Portfolio</Link></div>
                <div className="header-link"><Link to="/contacts">Contacts</Link></div>
                <BurgerMenu marginTop={headerHeight}/>
            </div>

        </header>
    );
};

export default Header;
