import React from 'react';
import "./MainPage.css";
import HeaderMainPage from "../../components/HeaderMainPage/HeaderMainPage";
import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";


const MainPage = () => {

    return (
        <>
            <Hero />
            <div className="contact-form-block">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    );
};

export default MainPage;