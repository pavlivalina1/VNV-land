import React from 'react';
import "./BurgerMenu.css";
import {Link} from "react-router-dom";

const BurgerMenu = ({marginTop}) => {

    return (
        <>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu" style={{ marginTop: marginTop }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </>
    );
};

export default BurgerMenu;