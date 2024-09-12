import React from 'react';
import "./AboutUsPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";


const MainPage = () => {

    return (
        <>
            <Header/>
            <AboutUs/>
            <div className="about-us-contact-form-block">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    );
};

export default MainPage;