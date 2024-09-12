import React, { useState, useEffect } from 'react';
import "./HeaderMainPage.css";
import Logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const HeaderMainPage = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [headerLogoHeight, setHeaderLogoHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        const handleResize = () => {
            const headerLogoHeight = document.querySelector('.header-logo').offsetHeight;
            setHeaderLogoHeight(headerLogoHeight + 40);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial calculation of headerLogoHeight
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <header className={`main-page-header ${isSticky ? 'sticky' : ''}`}>
            <div className="logo-block">
                <img src={Logo} className="header-logo"/>
                <BurgerMenu marginTop={headerLogoHeight}/>
            </div>
            <div className={`header-links ${isSticky ? 'fixed' : ''}`}>
                <div className="header-link"><Link to="/">Home</Link></div>
                <div className="header-link"><Link to="/about-us">About us</Link></div>
                <div className="header-link"><Link to="/portfolio">Portfolio</Link></div>
                <div className="header-link"><Link to="/contacts">Contacts</Link></div>
            </div>
        </header>
    );
};

export default HeaderMainPage;
