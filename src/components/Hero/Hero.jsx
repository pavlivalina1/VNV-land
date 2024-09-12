import React from 'react';
import "./Hero.css";
import HeaderMainPage from "../HeaderMainPage/HeaderMainPage";
import LetsGoBtn from "./LetsGoBtn/LetsGoBtn";

const Hero = () => {

    return (
       <div className="hero-container">
            <HeaderMainPage/>
            <div className="hero-text">
                <p className="hero-main-text"><strong>FREE</strong> CONSULTATION</p>
                <p className="hero-secondary-text">Still not sure what you really need or have any other concerns?</p>
                <p className="hero-secondary-text">WE <strong>are happy</strong> TO HELP!</p>
                <div className="hero-button-block">
                    <p className="hero-secondary-text">FREE</p>
                    <LetsGoBtn/>

                </div>
            </div>
       </div>
    );
};

export default Hero;