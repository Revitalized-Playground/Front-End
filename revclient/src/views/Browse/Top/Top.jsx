import React from 'react';

const Top = () => {
    return (
        <div className="topContainer">
            <div className="title">
                <p>What are your interests</p>
                <p className="questionMark">?</p>    
            </div>
            <div className="interests">
                <div className="interest one">
                    Electrical 
                </div>
                <div className="interest two">
                    Carpentry
                </div>
                <div className="interest three">
                    Interior Design
                </div>
                <div className="interest four">
                    HVAC
                </div>
                <div className="interest five">
                    Plumbing
                </div>
            </div>

        </div>
    );
};

export default Top;