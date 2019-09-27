import React from 'react';

const Top = () => {
    return (
        <div className="topContainer">
            <div className="title">
                <p>What is your area of interest</p>
                <p className="questionMark">?</p>    
            </div>
            <div className="interests">
                <div className="interest one">
                    Avionics
                </div>
                <div className="interest two">
                    Construction
                </div>
                <div className="interest three">
                    Interior Design
                </div>
                <div className="interest four">
                    Welding
                </div>
                <div className="interest five">
                    Wind Energy
                </div>
            </div>

        </div>
    );
};

export default Top;

