import React from 'react';
import "./Contacts.css";
import BearImage2 from "../../images/bear2.png";
import LetsGoBtn from "../Hero/LetsGoBtn/LetsGoBtn";



const Contacts = () => {

    return (
       <div className="contacts-page-title">
           <img src={BearImage2} alt="" className="bear2-img"/>
           <div className="contacts hero-text">
               <p className="hero-main-text">FREE CONSULTATION</p>
               <p className="hero-secondary-text">Still not sure what you really need or have any other concerns?</p>
               <p className="hero-secondary-text">WE are HAPPY TO HELP</p>
               <div className="hero-button-block">
                   <p className="hero-secondary-text">FREE.</p>
                   <LetsGoBtn/>
               </div>
           </div>

       </div>
    );
};

export default Contacts;