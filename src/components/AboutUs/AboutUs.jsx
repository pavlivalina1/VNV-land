import React from 'react';
import "./AboutUs.css";
import LapTop from "../../images/about-us-image.png"

const AboutUs = () => {

    return (
        <div className="about-us">
            <div className="about-us-1">
                <div className="text-block-1">
                    <p className="text-1">We are vnv solutions</p>
                    <div className="img-block phone">
                        <img src={LapTop} alt=""/>
                    </div>
                    <p className="text-2">A simple resolution to complex business challenges</p>
                    <a href="" className="contact-us-btn">contact us</a>
                </div>
                <div className="img-block">
                    <img src={LapTop} alt=""/>
                </div>

            </div>
            <div className="about-us-2">
                <div className="text-block-2">
                    <p className="text-1">About us</p>
                    <p className="text-2">We are VNV Solutions - your best pal<br/> in the <span style={{whiteSpace: 'nowrap'}}>tech-development</span> world</p>
                    <p className="text-3">We believe that solving business problems can be simple and enjoyable, that communication is key to business success</p>
                    <p className="text-3">We want to make IT development accessible and useful for all companies, regardless of their size or level of experience.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;