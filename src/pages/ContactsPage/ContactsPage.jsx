import React from 'react';
import "./ContactsPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import ContactBlock from "../../components/Contacts/ContactBlock/ContactBlock";


const MainPage = () => {

    return (
        <>
            <Header/>
            <Contacts/>

            <div className="contacts-contact-form">
                <ContactBlock/>
                <div className="contacts-contact-form-container">
                    <ContactForm/>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default MainPage;