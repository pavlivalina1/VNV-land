import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";


const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#">
                        <svg fill="#808080FF" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg fill="#808080FF" width="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg fill="#808080FF" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg fill="#808080FF" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                        </svg>
                    </a>
                </div>

                <div className="row">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contacts">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;