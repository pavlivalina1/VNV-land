import React from 'react';
import "./BearImage.css";
import Bear1 from "../../../images/bear1.png";
import Shadow1 from "../../../images/shadow1.png";
import Shadow2 from "../../../images/shadow2.png";

const BearImage = () => {

    return (
        <div className='bear-img-container'>
            <div className="relative-container">
                <img src={Bear1} alt="" className="bear1-img"/>
            </div>
        </div>
    );
};

export default BearImage;