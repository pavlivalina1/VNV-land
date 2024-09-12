import React from 'react';
import "./ContactForm.css";
import Bear1 from "../../images/bear1.png"
import BearImage from "./BearImage/BearImage";
import VnvMascot from "../../images/VNV-mascot.png"

const ContactForm = () => {

    return (
        <div className='contact-form-container'>
            <BearImage/>
            <div className="contact-form-wrapper">
                <p className="contact-form-title">TELL US ABOUT YOUR <strong>PROJECT</strong></p>
                <form className="contact-form">
                    <div className="name-block">
                        <div className="contact-form-input-block name">
                            <label htmlFor="firstame" className="contact-form-label ">First Name</label>
                            <input type="text" placeholder="Enter your first name" id="firstame" className="contact-form-input"/>
                        </div>
                        <div className="contact-form-input-block lastname">
                            <label htmlFor="lastname" className="contact-form-label">Last Name</label>
                            <input type="text" placeholder="Enter your last name" id="lastname" className="contact-form-input"/>
                        </div>
                    </div>
                    <div className="contact-form-input-block email">
                        <label htmlFor="firstame" className="contact-form-label">Email Address</label>
                        <input type="text" placeholder="Enter your email address" id="firstame" className="contact-form-input"/>
                    </div>
                    <div className="contact-form-input-block">
                        <label htmlFor="firstame" className="contact-form-label">Other convenient methods to contact</label>
                        <input type="text" placeholder="Telegram, Viber, Whats App, etc..." id="firstame" className="contact-form-input"/>
                    </div>
                    <div className="contact-form-input-block">
                        <label htmlFor="firstame" className="contact-form-label">About your project</label>
                        <input type="text" placeholder="Your text.." id="firstame" className="contact-form-input"/>
                    </div>
                    <button type="submit" className="submit-btn">CONFIRM</button>

                </form>

                <img src={VnvMascot} alt="" className="bear-full"/>
            </div>
        </div>
    );
};

export default ContactForm;