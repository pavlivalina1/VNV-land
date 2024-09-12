import React, {useEffect, useState} from 'react';
import "./PortfolioCard.css";
import ProjectImg from "../../../images/project-img.png";


const PortfolioCard = () => {

    const [cardHeight, setCardHeight] = useState(0);

    useEffect(() => {
        const handleCardResize= () => {
            const tempCardHeight = document.querySelector('.image-container').offsetWidth;
            setCardHeight(tempCardHeight * 0.75);

        }

        window.addEventListener('resize', handleCardResize);

        // Initial calculation of headerLogoHeight
        handleCardResize();

        return () => {
            window.removeEventListener('resize', handleCardResize);
        };


    }, [])

    return (
        <div className="portfolio-card">
            <div className="image-container" style={{height: cardHeight}}>
                <img src={ProjectImg} alt=""/>
            </div>
            <p className="project-name">My Project</p>

        </div>
    );
};

export default PortfolioCard;