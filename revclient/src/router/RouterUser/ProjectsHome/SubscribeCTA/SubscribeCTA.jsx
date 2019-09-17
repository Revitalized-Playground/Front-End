import React from 'react';
import subscribeImg from "../../../assets/ProjectPage/bebe.png";

const StudentCTA = () => {
    return (
        <div className="subscription-cta">
            <img src={subscribeImg} alt="Where do we go from here" />
            <div className="cta">
                <h2> Subscribe to Revitalize Now!</h2>
                <p>Receive our emails about donations, available<br /> trades, and more!</p>
                <button>Subscribe!</button>
            </div>
        </div>
    );
};

export default StudentCTA;