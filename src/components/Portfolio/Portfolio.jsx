import React from 'react';
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";


const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className="portfolio-text">
                <p className="portfolio-header">Showcases</p>
                <p className="portfolio-desc">Welcome to our showcases!. Here you’ll find selection of our works to navigate better. If you would like to see more examples of our work - please contact us, so we can share all the information directly.</p>
            </div>
            <div className="projects-container">
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
            </div>

        </div>
    );
};

export default Portfolio;