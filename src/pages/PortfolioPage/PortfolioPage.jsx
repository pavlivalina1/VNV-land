import React from 'react';
import "./PortfolioPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Portfolio from "../../components/Portfolio/Portfolio";


const PortfolioPage = () => {

    return (
        <>
            <Header/>
            <Portfolio/>
            <div className="contact-form-block">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    );
};

export default PortfolioPage;